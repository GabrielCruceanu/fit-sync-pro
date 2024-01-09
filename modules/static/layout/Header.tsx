import React from "react";
import AuthButton from "./components/AuthButton";
import NavigationBar from "./components/NavigationBar";

export function Header() {
  return (
    <header className="w-full flex items-center justify-center">
      <NavigationBar>
        <AuthButton />
      </NavigationBar>
    </header>
  );
}
