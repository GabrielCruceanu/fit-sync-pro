"use client";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import NavItems from "./nav-items";
import { ApplicationLinks } from "@/constants/links";
import React from "react";
import { usePathname } from "next/navigation";
import FitSyncLogo from "@/components/shared/fit-sync-logo";
import { cn } from "@/lib/cn";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pathname = usePathname();
  return (
    <>
      <Navbar
        isBordered
        maxWidth={"xl"}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent justify="start">
          <NavbarBrand>
            <Link href={"/"}>
              <FitSyncLogo />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavItems />
        </NavbarContent>

        <NavbarContent justify="end">
          {/*<NavbarItem>*/}
          {/*  <ThemeSwitcher />*/}
          {/*</NavbarItem>*/}
          <NavbarItem className="mr-2 mr-lg-0 hidden lg:flex">
            <Link
              className="inline-flex items-center py-3 px-5 font-semibold text-center rounded-lg text-background bg-foreground"
              href={ApplicationLinks.login.link}
            >
              Sign In
            </Link>
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
                  ? "text-primary-500 font-semibold"
                  : "text-foreground",
              )}
              href={ApplicationLinks.login.link}
              size="lg"
            >
              {/*<CircleUserRound className="mr-2" />*/}
              Account
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
