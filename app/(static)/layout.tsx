import { Footer, Header } from "@/modules/static/layout";
import React from "react";

export default function StaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
