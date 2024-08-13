"use client";
import { NavbarItem, NavbarMenuItem } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import React from "react";
import isSmallScreen from "@/helpers/is-small-screen";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const navItems = [
  {
    title: "Trainers",
    url: "/trainers",
  },
  {
    title: "Nutritionists",
    url: "/nutritionists",
  },
  {
    title: "Gyms",
    url: "/gyms",
  },
  {
    title: "Professional",
    url: "/professional",
  },
];
const NavItems = () => {
  const pathname = usePathname();
  return (
    <>
      {navItems.map((item, index) =>
        isSmallScreen() ? (
          <NavbarMenuItem key={`${item.url}-${index}`}>
            <Link
              className={cn(
                "w-full",
                pathname === item.url
                  ? "text-primary-500 font-semibold"
                  : "text-foreground",
              )}
              href={item.url}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ) : (
          <NavbarItem key={item.url}>
            <Link
              href={item.url}
              className={cn(
                "px-2 font-normal",
                pathname === item.url
                  ? "text-primary-500 font-semibold"
                  : "text-foreground",
              )}
              aria-current="page"
            >
              {item.title}
            </Link>
          </NavbarItem>
        ),
      )}
    </>
  );
};

export default NavItems;
