import { ProScreen } from "@/modules/static/pro";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pro | FitSync",
  description:
    "FitSync este o platformă care dorește să îmbunătățească experiența clienților cu antrenorii și să facă munca antrenorilor mai ușoară oferindu-le mai multe unelte prin care își pot gestiona clienții mai ușor.",
};
export default function ProPage() {
  return <ProScreen />;
}
