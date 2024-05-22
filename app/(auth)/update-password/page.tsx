import { Metadata } from "next";
import { UpdatePasswordScreen } from "@/modules/application/auth";

export const metadata: Metadata = {
  title: "Update Password | FitSyncPro",
  description:
    "Update password to FitSyncPro to access your account. FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
};
export default function UpdatePasswordPage() {
  return <UpdatePasswordScreen />;
}
