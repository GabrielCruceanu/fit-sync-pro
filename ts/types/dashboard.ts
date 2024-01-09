import { MainNavItem, SidebarNavItem } from "@/ts/types/navigation";

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type UserLayout = {
  imgUrl?: string | null;
  fullName: string;
  username: string;
  userType: string;
};
