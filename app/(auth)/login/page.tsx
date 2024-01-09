import { Metadata } from "next";
import { LoginScreen } from "@/modules/application/auth";
export const metadata: Metadata = {
  title: "Autentificare | FitSync",
  description:
    "FitSync este o platformă care dorește să îmbunătățească experiența clienților cu antrenorii și să facă munca antrenorilor mai ușoară oferindu-le mai multe unelte prin care își pot gestiona clienții mai ușor.",
};

export default function LoginPage() {
  return <LoginScreen />;
}
