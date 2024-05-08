"use client";
import { LayoutTitle } from "@/modules/application/layout/components/LayoutTitle";
import { Button } from "@nextui-org/button";
import * as React from "react";
import { Settings } from "@/ts/enum";
import { useStore } from "@/store";

export default function ThemeSettingsPage() {
  const updateSettingsType = useStore((state) => state.updateSettingsStep);
  return (
    <>
      <LayoutTitle title={"Theme Settings"} />
      <Button
        onClick={() => updateSettingsType(Settings.Preferences)}
        type="button"
        color={"default"}
        radius={"sm"}
        fullWidth
      >
        Back
      </Button>
    </>
  );
}
