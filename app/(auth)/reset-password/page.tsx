import { Metadata } from "next";
import { ResetPasswordScreen } from "@/modules/application/auth";

export const metadata: Metadata = {
  title: "Reset Password",
  description:
    "Reset password to FitSyncPro to access your account. FitSyncPro is a platform that connects trainers, nutritionist, and gyms with clients.",
};
export default function ResetPasswordPage() {
  return <ResetPasswordScreen />;
}
