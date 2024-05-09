import { LayoutScreen } from "@/modules/application/layout";

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutScreen>{children}</LayoutScreen>;
}
