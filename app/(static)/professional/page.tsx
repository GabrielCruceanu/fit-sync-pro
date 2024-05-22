import { ProScreen } from "@/modules/static/pro";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Professional | FitSyncPro",
  description:
    "FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
};
export default function ProPage() {
  return <ProScreen />;
}
