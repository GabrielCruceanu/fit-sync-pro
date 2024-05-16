"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="capitalize">
      {theme === "light" && (
        <Button
          onClick={() => setTheme("dark")}
          isIconOnly
          variant="light"
          color="default"
          stylearia-label="Dark Mode"
        >
          <Moon />
        </Button>
      )}
      {theme === "dark" && (
        <Button
          onClick={() => setTheme("light")}
          isIconOnly
          variant="light"
          color="default"
          aria-label="Light Mode"
        >
          <Sun />
        </Button>
      )}
    </div>
  );
}
