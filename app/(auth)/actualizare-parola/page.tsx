import { Metadata } from "next";
import { UpdatePassword } from "@/modules/application/auth";

export const metadata: Metadata = {
  title: "Actualizare parola",
  description:
    "Introdu adresa de e-mail si parola in campurile de mai jos pentru a intra in cont.",
};

export default function UpdatePasswordPage() {
  return <UpdatePassword />;
}
