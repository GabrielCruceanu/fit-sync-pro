"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/create-client";
import { SettingsSkeleton } from "@/modules/application/settings/components/SettingsSkeleton";
import { SettingsType } from "@/ts/enum";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { ProfileSettings } from "@/modules/application/settings/components/ProfileSettings";

export function SettingsScreen() {
  const supabase = createClient();
  const [isClient, setIsClient] = useState(false);
  const [settingsType, setSettingsType] = useState<SettingsType>(
    SettingsType.Profile,
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
        onSelectionChange={(e) => setSettingsType(e as SettingsType)}
      >
        <Tab key={SettingsType.Profile} title={SettingsType.Profile}>
          <Card>
            <CardBody>
              <ProfileSettings />
            </CardBody>
          </Card>
        </Tab>

        <Tab key={SettingsType.Preference} title={SettingsType.Preference}>
          <Card>
            <CardBody>{SettingsType.Preference}</CardBody>
          </Card>
        </Tab>

        <Tab
          key={SettingsType.Notifications}
          title={SettingsType.Notifications}
        >
          <Card>
            <CardBody>{SettingsType.Notifications}</CardBody>
          </Card>
        </Tab>

        <Tab key={SettingsType.Password} title={SettingsType.Password}>
          <Card>
            <CardBody>{SettingsType.Password}</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  ) : (
    <SettingsSkeleton />
  );
}
