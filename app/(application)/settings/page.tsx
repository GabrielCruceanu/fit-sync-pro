import { Metadata } from "next";
import { SettingsScreen } from "@/modules/application/settings/SettingsScreen";

export const metadata: Metadata = {
  title: "Settings",
  description:
    "FitSyncPro is a platform that connects trainers, nutritionist, and gyms with clients.",
};
export default function SettingsPage() {
  return <SettingsScreen />;
}
