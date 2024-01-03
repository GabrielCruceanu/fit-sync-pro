import { create } from "zustand";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/gotrue-js";

type State = {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  user: User | null;
  userActions: {
    updateUser: (updatedUser: any) => void;
    fetchUser: () => Promise<void>;
  };
  trainers: any[];
  trainerActions: {
    fetchTrainers: () => Promise<void>;
  };
};

export const useStore = create<State>()((set) => ({
  isLoading: false,
  setLoading: (loading: boolean) => ({ isLoading: loading }),
  user: null,
  userActions: {
    updateUser: (updatedUser) =>
      set((state) => ({
        user: {
          ...state.user,
          ...updatedUser,
        },
      })),
    fetchUser: async () => {
      const supabase = createClient();

      set((state) => ({
        ...state,
        isLoading: true,
      }));

      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      set((state) => ({
        ...state,
        user: user,
      }));

      set((state) => ({
        ...state,
        isLoading: false,
      }));
    },
  },
  trainers: [],
  trainerActions: {
    fetchTrainers: async () => {
      const supabase = createClient();
      const { data: trainers, error } = await supabase
        .from("trainers")
        .select("*");
      if (error) throw error;
      set({ trainers });
    },
  },
}));
