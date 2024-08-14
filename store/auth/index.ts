import { create } from "zustand";
import { createClient } from "@/utils/supabase/create-client";
import { UserDetails } from "@/ts/types";

type State = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  isGoogleLoading: boolean;
  setIsGoogleLoading: (loading: boolean) => void;
  isFacebookLoading: boolean;
  setIsFacebookLoading: (loading: boolean) => void;
  user: UserDetails | null;
  setUser: (user: any) => void;
  autoLogin: () => void;
  signOut: () => void;
};

const supabase = createClient();
export const useStore = create<State>()((set, state) => ({
  ...state,
  isLoading: false,
  setIsLoading: (isLoading) =>
    set((state) => ({ ...state, isLoading: isLoading })),
  isGoogleLoading: false,
  setIsGoogleLoading: (loading) =>
    set((state) => ({ ...state, isGoogleLoading: loading })),
  isFacebookLoading: false,
  setIsFacebookLoading: (loading) =>
    set((state) => ({ ...state, isFacebookLoading: loading })),
  user: null,
  setUser: (user: UserDetails) => set((state) => ({ ...state, user })),
  autoLogin: async () => {
    const canInitSupabaseClient = () => {
      // This function is just for the interactive tutorial.
      // Feel free to remove it once you have Supabase connected.
      try {
        createClient();
        return true;
      } catch (e) {
        return false;
      }
    };

    const isSupabaseConnected = canInitSupabaseClient();
    if (isSupabaseConnected) {
      const userAuth = await supabase.auth.getUser();
      const { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", userAuth.data.user?.id);

      if (users) {
        const user = users[0] as UserDetails;

        set((state) => ({
          ...state,
          user,
        }));
      }
    } else {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      sessionStorage.removeItem("fit-sync-storage");
      window.location.reload();
    }
  },
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    sessionStorage.removeItem("fit-sync-storage");
    console.log("sign out");
    window.location.reload();
  },
}));
