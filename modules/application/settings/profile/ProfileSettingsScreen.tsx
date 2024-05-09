"use client";
import { LayoutTitle } from "@/modules/application/layout/components/LayoutTitle";
import { Button } from "@nextui-org/button";
import * as React from "react";
import { SettingsStep } from "@/ts/enum";
import { useStore } from "@/store";

export default function ProfileSettingsPage() {
  const updateSettingsType = useStore((state) => state.updateSettingsStep);
  return (
    <>
      <LayoutTitle title={"Profile Settings"} />
      <Button
        onClick={() => updateSettingsType(SettingsStep.Preferences)}
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
