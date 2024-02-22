"use client";
import { LayoutTitle } from "@/modules/application/layout/components/LayoutTitle";
import { Button } from "@nextui-org/button";
import * as React from "react";
import { SettingsType } from "@/ts/enum";
import { useStore } from "@/store";

export default function ThemeSettingsPage() {
  const updateSettingsType = useStore((state) => state.updateSettingsType);
  return (
    <>
      <LayoutTitle title={"Theme Settings"} />
      <Button
        onClick={() => updateSettingsType(SettingsType.Preference)}
        type="button"
        color={"default"}
        radius={"sm"}
        fullWidth
      >
        Înapoi
      </Button>
    </>
  );
}
