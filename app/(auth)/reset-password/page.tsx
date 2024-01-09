import { Metadata } from "next";
import { ResetPasswordScreen } from "@/modules/application/auth";

export const metadata: Metadata = {
  title: "Resetare Parolă | FitSync",
  description:
    "FitSync este o platformă care dorește să îmbunătățească experiența clienților cu antrenorii și să facă munca antrenorilor mai ușoară oferindu-le mai multe unelte prin care își pot gestiona clienții mai ușor.",
};
export default function ResetPasswordPage() {
  return <ResetPasswordScreen />;
}
