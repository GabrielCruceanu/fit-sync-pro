"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/create-client";
import { SettingsSkeleton } from "@/modules/application/settings/components/SettingsSkeleton";
import { SettingsStep } from "@/ts/enum";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { ProfileSettings } from "@/modules/application/settings/components/ClientSettings";

export function SettingsScreen() {
  const supabase = createClient();
  const [isClient, setIsClient] = useState(false);
  const [settingsType, setSettingsType] = useState<SettingsStep>(
    SettingsStep.Profile,
  );
  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user && sessionStorage && sessionStorage.getItem("fit-sync-storage")) {
      sessionStorage.removeItem("fit-sync-storage");
    }
  };
  useEffect(() => {
    setIsClient(true);
    getUser();
  }, []);
  return isClient ? (
    <div className="py-8 lg:p-8 w-full">
      <Tabs
        aria-label="Settings"
        selectedKey={settingsType}
        onSelectionChange={(e) => setSettingsType(e as SettingsStep)}
      >
        <Tab key={SettingsStep.Profile} title={SettingsStep.Profile}>
          <Card>
            <CardBody>
              <ProfileSettings />
            </CardBody>
          </Card>
        </Tab>

        <Tab key={SettingsStep.Preferences} title={SettingsStep.Preferences}>
          <Card>
            <CardBody>{SettingsStep.Preferences}</CardBody>
          </Card>
        </Tab>

        <Tab
          key={SettingsStep.Notifications}
          title={SettingsStep.Notifications}
        >
          <Card>
            <CardBody>{SettingsStep.Notifications}</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  ) : (
    <SettingsSkeleton />
  );
}
