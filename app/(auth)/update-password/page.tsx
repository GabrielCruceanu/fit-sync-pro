import { Metadata } from "next";
import { UpdatePasswordScreen } from "@/modules/application/auth";

export const metadata: Metadata = {
  title: "Update Password",
  description:
    "Update password to FitSyncPro to access your account. FitSyncPro is a platform that connects trainers, nutritionist, and gyms with clients.",
};
export default function UpdatePasswordPage() {
  return <UpdatePasswordScreen />;
}
