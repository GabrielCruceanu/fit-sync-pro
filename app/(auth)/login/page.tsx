import { Metadata } from "next";
import { LoginScreen } from "@/modules/application/auth";
export const metadata: Metadata = {
  title: "Login | FitSyncPro",
  description:
    "Login to FitSyncPro to access your account. FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
};

export default function LoginPage() {
  return <LoginScreen />;
}
