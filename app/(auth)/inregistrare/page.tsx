import { Metadata } from "next";
import { SingUp } from "@/modules/application/auth";

export const metadata: Metadata = {
  title: "Inregistrare",
  description:
    "Inregistreazate pe platforma FitSync pentru a intalni antrenorii, nutritionistii si salile de top.",
};

export default function SignUpPage() {
  return <SingUp />;
}
