import { Metadata } from "next";
import { GymsScreen } from "@/modules/static/gyms";

export const metadata: Metadata = {
  title: "Gyms",
  description:
    "FitSyncPro is a platform that connects trainers, nutritionist, and gyms with clients.",
};
export default function Page() {
  return (
    <>
      <GymsScreen />
    </>
  );
}
