"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useEffect } from "react";
import { useStore } from "@/store";
import { PagesLinks } from "@/constants/links";
import Link from "next/link";

const ProfileDropDown = ({ children }: { children: React.ReactNode }) => {
  const { user, userActions } = useStore();
  useEffect(() => {
    userActions.fetchUser();
  }, []);

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <Dropdown
          placement="bottom-end"
          className="bg-white dark:bg-background"
        >
          <DropdownTrigger>
            <Avatar as="button" className="transition-transform" />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user.email}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Profile</DropdownItem>
            <DropdownItem key="all_orders">All Orders</DropdownItem>
            <DropdownItem key="team_settings">
              Apply for seller account
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              {children}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <Link
          href={PagesLinks.login.link}
          className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          {PagesLinks.login.name}
        </Link>
      )}
    </div>
  );
};

export default ProfileDropDown;
