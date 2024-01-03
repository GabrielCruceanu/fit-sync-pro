import { Metadata } from "next";
import { ResetPassword } from "@/modules/application/auth";

export const metadata: Metadata = {
  title: "Resetare Parola",
  description:
    "Introdu adresa de e-mail si parola in campurile de mai jos pentru a intra in cont.",
};

export default function ResetPasswordPage() {
  return <ResetPassword />;
}
