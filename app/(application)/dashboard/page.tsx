import { LayoutTitle } from "@/modules/application/layout/components/LayoutTitle";
import { ApplicationLinks } from "@/constants/links";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard | FitSyncPro",
  description:
    "FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
};
export default function DashboardPage() {
  return <LayoutTitle title={ApplicationLinks.dashboard.name}></LayoutTitle>;
}
