import { Metadata } from "next";
import { Login } from "@/modules/application/auth";

export const metadata: Metadata = {
  title: "Autentificare",
  description: "Intra in contul tau de pe platforma",
};

export default function LoginPage() {
  return <Login />;
}
