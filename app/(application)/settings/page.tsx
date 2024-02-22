import { Metadata } from "next";
import { SettingsScreen } from "@/modules/application/settings/SettingsScreen";

export const metadata: Metadata = {
  title: "Setari | FitSync",
  description:
    "FitSync este o platformă care dorește să îmbunătățească experiența clienților cu antrenorii și să facă munca antrenorilor mai ușoară oferindu-le mai multe unelte prin care își pot gestiona clienții mai ușor.",
};
export default function SettingsPage() {
  return <SettingsScreen />;
}
