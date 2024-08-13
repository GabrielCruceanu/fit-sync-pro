import { LayoutTitle } from "@/modules/application/layout/components/LayoutTitle";
import { ApplicationLinks } from "@/constants/links";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Messages",
  description:
    "FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
};
export default function MessagesPage() {
  return <LayoutTitle title={ApplicationLinks.messages.name} />;
}
