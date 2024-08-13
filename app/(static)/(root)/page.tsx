import { HomeScreen } from "@/modules/static/home";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
  description:
    "FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
};
export default function Home() {
  return <HomeScreen />;
}
