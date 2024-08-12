import { Metadata } from "next";
import { DashboardScreen } from "@/modules/application/dashboard";

export const metadata: Metadata = {
  title: "Dashboard | FitSyncPro",
  description:
    "FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
};
export default function DashboardPage() {
  return <DashboardScreen />;
}
