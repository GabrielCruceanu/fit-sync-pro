"use client";
import { Button, Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import {
  Bell,
  Menu,
  MessageSquare,
  Presentation,
  Settings,
  SquareUserRound,
  XIcon,
} from "lucide-react";
import { UserNavigation } from "@/modules/application/layout";
import { LogoutButton } from "@/modules/application/layout/components/LogoutButton";
import { ApplicationLinks } from "@/constants/links";
import isSmallScreen from "@/helpers/is-small-screen";
import { usePathname } from "next/navigation";
import { useStore } from "@/store";
import FitSyncLogo from "@/components/shared/fit-sync-logo";
import { ThemeSwitcher } from "@/components/shared/theme-switcher";
import { cn } from "@/lib/cn";

export function LayoutNavigation({ children }: { children: React.ReactNode }) {
  const [drawerNavigation, setDrawerNavigation] = useState(true);
  const pathname = usePathname();
  const { user, autoLogin } = useStore((state) => state);
  useEffect(() => {
    const drawerState = isSmallScreen();
    setDrawerNavigation(drawerState);
    autoLogin();
  }, []);

  const toggleDrawerNavigation = () => {
    setDrawerNavigation(!drawerNavigation);
  };

  return (
    <div className="antialiased bg-white dark:bg-background">
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-background dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">
          <div className="flex justify-start items-center lg:hidden">
            <Button
              isIconOnly
              variant={"light"}
              color="default"
              aria-label="Toggle sidebar"
              onClick={() => toggleDrawerNavigation()}
              className="mr-2"
            >
              {drawerNavigation ? <Menu /> : <XIcon />}
            </Button>
          </div>
          <Link
            href={ApplicationLinks.dashboard.link}
            className="flex items-center"
          >
            <FitSyncLogo />
          </Link>
          <div className="flex items-center lg:order-2 min-w-[40px]">
            <ThemeSwitcher />
          </div>
        </div>
      </nav>

      <div className="relative flex h-full w-full flex-1 max-w-screen-xl mx-auto bg-gray-50">
        <aside
          className={cn(
            "fixed lg:relative top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform bg-white border-r border-gray-200  dark:bg-background dark:border-gray-700",
            drawerNavigation
              ? "-translate-x-full lg:translate-x-0"
              : "translate-x-0",
          )}
          aria-label="Sidenav"
          id="drawer-navigation"
        >
          <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-background">
            <div className="flex flex-col items-center">
              <UserNavigation
                imgUrl={user?.profilePictureUrl}
                fullName={
                  user?.name
                    ? user.name
                    : user?.firstName && user?.lastName
                      ? user?.firstName + " " + user?.lastName
                      : "Anonymous"
                }
                username={user?.username ? user?.username : "anonymous"}
                userType={user?.userType ? user?.userType : "Client"}
              />
            </div>
            <ul className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
              <li></li>
              <li>
                <Link
                  href={ApplicationLinks.dashboard.link}
                  className={cn(
                    "flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                    pathname === ApplicationLinks.dashboard.link
                      ? "text-primary-500"
                      : "text-foreground",
                  )}
                >
                  <Presentation className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />

                  <span className="ml-3">
                    {ApplicationLinks.dashboard.name}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={ApplicationLinks.profile.link}
                  className={cn(
                    "flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                    pathname === ApplicationLinks.profile.link
                      ? "text-primary-500"
                      : "text-foreground",
                  )}
                >
                  <SquareUserRound className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3">{ApplicationLinks.profile.name}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={ApplicationLinks.messages.link}
                  className={cn(
                    "flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                    pathname === ApplicationLinks.messages.link
                      ? "text-primary-500"
                      : "text-foreground",
                  )}
                >
                  <MessageSquare className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {ApplicationLinks.messages.name}
                  </span>
                  <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                    8
                  </span>
                </Link>
              </li>
            </ul>
            <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
              <li>
                <Link
                  href={ApplicationLinks.notifications.link}
                  className={cn(
                    "flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                    pathname === ApplicationLinks.notifications.link
                      ? "text-primary-500"
                      : "text-foreground",
                  )}
                >
                  <Bell className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {ApplicationLinks.notifications.name}
                  </span>
                  <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                    12
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={ApplicationLinks.settings.link}
                  className={cn(
                    "flex items-center p-2 text-base font-medium rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                    pathname === ApplicationLinks.settings.link
                      ? "text-primary-500"
                      : "text-foreground",
                  )}
                >
                  <Settings className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3">{ApplicationLinks.settings.name}</span>
                </Link>
              </li>
              <li className="mt-auto">
                <LogoutButton />
              </li>
            </ul>
          </div>
        </aside>

        <main className="dark:bg-background w-full flex-1 p-4 flex flex-col items-stretch h-full space-y-4 lg:max-w-screen-xl lg:mx-auto pt-20 lg:pt-14 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
