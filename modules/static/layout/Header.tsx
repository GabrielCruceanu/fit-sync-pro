import React from "react";
import NavigationBar from "./components/NavigationBar";
import ProfileDropDown from "@/modules/static/layout/components/ProfileDropdown";

export function Header() {
  return (
    <header className="w-full flex items-center justify-center">
      <NavigationBar>
        <ProfileDropDown />
      </NavigationBar>
    </header>
  );
}
