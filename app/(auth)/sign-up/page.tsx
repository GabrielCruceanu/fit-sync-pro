import { Metadata } from "next";
import { SingUpScreen } from "@/modules/application/auth";
export const metadata: Metadata = {
  title: "Sing Up | FitSyncPro",
  description:
    "Sing up to FitSyncPro to access your account. FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
};

export default function SignUpPage() {
  return <SingUpScreen />;
}
