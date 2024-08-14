import { Metadata } from "next";
import { TrainersScreen } from "@/modules/static/trainers";

export const metadata: Metadata = {
  title: "Trainers",
  description:
    "FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
};
export default function Page() {
  return <TrainersScreen />;
}
