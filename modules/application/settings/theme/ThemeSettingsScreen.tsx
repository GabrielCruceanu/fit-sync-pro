"use client";
import { LayoutTitle } from "@/modules/application/layout/components/LayoutTitle";
import { Button } from "@nextui-org/button";
import * as React from "react";
import { SettingsStep } from "@/ts/enum";
import { useSettingsStore } from "@/store/settings";

export default function ThemeSettingsPage() {
  const updateSettingsType = useSettingsStore(
    (state) => state.updateSettingsStep,
  );
  return (
    <>
      <LayoutTitle title={"Theme Settings"} />
      <Button
        onClick={() => updateSettingsType(SettingsStep.Preferences)}
        type="button"
        color={"default"}
        variant={"ghost"}
        radius={"sm"}
        fullWidth
      >
        Back
      </Button>
    </>
  );
}
