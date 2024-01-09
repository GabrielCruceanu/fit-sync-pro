import { Metadata } from "next";
import { UpdatePasswordScreen } from "@/modules/application/auth";

export const metadata: Metadata = {
  title: "Actualizare parolă | FitSync",
  description:
    "FitSync este o platformă care dorește să îmbunătățească experiența clienților cu antrenorii și să facă munca antrenorilor mai ușoară oferindu-le mai multe unelte prin care își pot gestiona clienții mai ușor.",
};

export default function UpdatePasswordPage() {
  return <UpdatePasswordScreen />;
}
