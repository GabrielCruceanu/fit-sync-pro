"use client";
import {
  cn,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import NavItems from "./NavItems";
import { ApplicationLinks } from "@/constants/links";
import { CircleUserRound } from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";
import FitSyncLogo from "@/components/shared/fit-sync-logo";
import { ThemeSwitcher } from "@/components/shared/theme-switcher";

export default function NavigationBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pathname = usePathname();
  return (
    <Navbar
      isBordered
      maxWidth={"xl"}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <FitSyncLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavItems />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="mr-2 mr-lg-0 hidden lg:flex">
          {children}
        </NavbarItem>

        <NavbarMenuToggle
          className="lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu>
        <NavItems />

        <NavbarMenuItem>
          <Link
            className={cn(
              "w-full cursor-pointer",
              pathname === ApplicationLinks.login.link
                ? "text-primary-500"
                : "text-foreground",
            )}
            href={ApplicationLinks.login.link}
            size="lg"
          >
            <CircleUserRound className="mr-2" />
            Contul tău
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
