import { HomeScreen } from "@/modules/static/home";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Acasă | FitSync",
  description:
    "FitSync este o platformă care dorește să îmbunătățească experiența clienților cu antrenorii și să facă munca antrenorilor mai ușoară oferindu-le mai multe unelte prin care își pot gestiona clienții mai ușor.",
};
export default function Home() {
  return (
    <main>
      <HomeScreen />
    </main>
  );
}
