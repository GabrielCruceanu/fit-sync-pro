import { LayoutTitle } from "@/modules/application/layout/components/LayoutTitle";
import { ApplicationLinks } from "@/constants/links";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Profile| FitSync",
  description:
    "FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
};
export default function ProfilePage() {
  return <LayoutTitle title={ApplicationLinks.profile.name}></LayoutTitle>;
}
