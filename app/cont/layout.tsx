import { LayoutScreen } from "@/modules/application/layout/LayoutScreen";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutScreen>{children}</LayoutScreen>;
}
