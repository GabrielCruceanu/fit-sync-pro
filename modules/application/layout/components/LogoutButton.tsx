import { ApplicationLinks } from "@/constants/links";
import React from "react";
import { Button } from "@nextui-org/react";
import { useStore } from "@/store";

export function LogoutButton() {
  const { signOut } = useStore((state) => state);

  return (
    <Button
      onClick={() => signOut()}
      color={"default"}
      type="submit"
      className="my-5 w-full flex items-center justify-center py-1.5 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-background dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 dark:text-white mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      {ApplicationLinks.logout.name}
    </Button>
  );
}
