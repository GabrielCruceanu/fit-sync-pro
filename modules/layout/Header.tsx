import React from "react";
import AuthButton from "@/modules/layout/components/AuthButton";
import NavigationBar from "@/modules/layout/components/NavigationBar";

export function Header() {
  return (
    <header className="w-full flex items-center justify-center">
      <NavigationBar>
        <AuthButton />
      </NavigationBar>
    </header>
  );
}
