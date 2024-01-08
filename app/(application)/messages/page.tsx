import { LayoutTitle } from "@/modules/application/layout/components/LayoutTitle";
import { ApplicationLinks } from "@/constants/links";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mesaje | FitSync",
  description:
    "FitSync este o platformă care dorește să îmbunătățească experiența clienților cu antrenorii și să facă munca antrenorilor mai ușoară oferindu-le mai multe unelte prin care își pot gestiona clienții mai ușor.",
};
export default function MessagesPage() {
  return <LayoutTitle title={ApplicationLinks.messages.name} />;
}
