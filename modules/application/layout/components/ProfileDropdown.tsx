"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ApplicationLinks } from "@/constants/links";
import Link from "next/link";
import { useStore } from "@/store";

const ProfileDropDown = () => {
  const { user, signOut } = useStore((state) => state);

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
          <DropdownMenu aria-label="Profile Actions" variant="bordered">
            <DropdownItem
              key="profile"
              className="border-b-1 border-b-black dark:border-b-white"
            >
              <p>Welcome,</p>
              <p className="font-semibold">
                {`${user.firstName} ${user.lastName}`}
              </p>
            </DropdownItem>
            <DropdownItem
              href={ApplicationLinks.settings.link}
              key={ApplicationLinks.settings.name}
            >
              {ApplicationLinks.settings.name}
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              <button onClick={() => signOut()}>
                {ApplicationLinks.logout.name}
              </button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <Link
          className="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary dark:hover:bg-primary-600 dark:focus:ring-primary-700"
          href={ApplicationLinks.login.link}
        >
          {ApplicationLinks.login.name}
        </Link>
        // <Dropdown
        //   placement="bottom-end"
        //   className="bg-white dark:bg-background"
        // >
        //   <DropdownTrigger>
        //     <Avatar as="button" className="transition-transform" />
        //   </DropdownTrigger>
        //   <DropdownMenu
        //     aria-label="Profile Not loggedin Actions"
        //     variant="flat"
        //   >
        //     <DropdownItem key="profile-not-logged">
        //       <Link href={PagesLinks.login.link}>{PagesLinks.login.name}</Link>
        //     </DropdownItem>
        //   </DropdownMenu>
        // </Dropdown>
      )}
    </div>
  );
};

export default ProfileDropDown;
