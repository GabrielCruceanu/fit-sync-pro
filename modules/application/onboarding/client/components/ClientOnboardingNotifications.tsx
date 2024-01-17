import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import * as React from "react";
import { useState } from "react";
import { OnboardClientSteps } from "@/ts/enum";
import { cn, Switch } from "@nextui-org/react";

export function ClientOnboardingNotifications() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingDetails,
  );

  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    updateOnboardingDetails({
      ...onboardingDetails,
      clientSteps: OnboardClientSteps.Overview,
    });
    setConfirmBtnDisable(false);
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/contact.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Preferințe de notificare"}
      body={"Fii la curent cu noutățile!"}
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          {/*WorkoutNotifications*/}
          <Switch
            classNames={{
              base: cn(
                "inline-flex flex-row-reverse w-full max-w-md items-center",
                "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-default",
                "data-[selected=true]:border-primary",
              ),
              wrapper: "p-0 h-4 overflow-visible",
              thumb: cn(
                "w-6 h-6 border-2 shadow-lg",
                "group-data-[hover=true]:border-primary", //selected
                "group-data-[selected=true]:ml-6", // pressed
                "group-data-[pressed=true]:w-7",
                "group-data-[selected]:group-data-[pressed]:ml-4",
              ),
            }}
            defaultSelected={true}
            isSelected={onboardingDetails.notificationsWorkout}
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                notificationsWorkout: e,
              });
              setConfirmBtnDisable(false);
            }}
          >
            <div className="flex flex-col gap-1">
              <p className="text-medium">Antrenament</p>
              <p className="text-tiny text-default-400">
                Primește notificari de antrenament
              </p>
            </div>
          </Switch>
          {/*NutritionNotifications*/}
          <Switch
            classNames={{
              base: cn(
                "inline-flex flex-row-reverse w-full max-w-md items-center",
                "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-default",
                "data-[selected=true]:border-primary",
              ),
              wrapper: "p-0 h-4 overflow-visible",
              thumb: cn(
                "w-6 h-6 border-2 shadow-lg",
                "group-data-[hover=true]:border-primary", //selected
                "group-data-[selected=true]:ml-6", // pressed
                "group-data-[pressed=true]:w-7",
                "group-data-[selected]:group-data-[pressed]:ml-4",
              ),
            }}
            defaultSelected={true}
            isSelected={onboardingDetails.notificationsNutrition}
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                notificationsNutrition: e,
              });
              setConfirmBtnDisable(false);
            }}
          >
            <div className="flex flex-col gap-1">
              <p className="text-medium">Nutritie</p>
              <p className="text-tiny text-default-400">
                Primește notificari de la nutritip
              </p>
            </div>
          </Switch>
          {/*NewsAndActualizations*/}
          <Switch
            classNames={{
              base: cn(
                "inline-flex flex-row-reverse w-full max-w-md items-center",
                "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-default",
                "data-[selected=true]:border-primary",
              ),
              wrapper: "p-0 h-4 overflow-visible",
              thumb: cn(
                "w-6 h-6 border-2 shadow-lg",
                "group-data-[hover=true]:border-primary", //selected
                "group-data-[selected=true]:ml-6", // pressed
                "group-data-[pressed=true]:w-7",
                "group-data-[selected]:group-data-[pressed]:ml-4",
              ),
            }}
            defaultSelected={true}
            isSelected={onboardingDetails.newsAndActualizations}
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                newsAndActualizations: e,
              });
              setConfirmBtnDisable(false);
            }}
          >
            <div className="flex flex-col gap-1">
              <p className="text-medium">Noutăți și actualizări</p>
              <p className="text-tiny text-default-400">
                Primește notificari despre noutăți și actualizări
              </p>
            </div>
          </Switch>
          {/*OffersAndPromotions*/}
          <Switch
            classNames={{
              base: cn(
                "inline-flex flex-row-reverse w-full max-w-md items-center",
                "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-default",
                "data-[selected=true]:border-primary",
              ),
              wrapper: "p-0 h-4 overflow-visible",
              thumb: cn(
                "w-6 h-6 border-2 shadow-lg",
                "group-data-[hover=true]:border-primary", //selected
                "group-data-[selected=true]:ml-6",
                "group-data-[selected=true]:border:primary", // pressed
                "group-data-[pressed=true]:w-7",
                "group-data-[selected]:group-data-[pressed]:ml-4",
              ),
            }}
            defaultSelected={true}
            isSelected={onboardingDetails.offersAndPromotions}
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                offersAndPromotions: e,
              });
              setConfirmBtnDisable(false);
            }}
          >
            <div className="flex flex-col gap-1">
              <p className="text-medium">Oferte speciale și promoții</p>
              <p className="text-tiny text-default-400">
                Primește notificari despre oferte speciale și promoții
                personalizate
              </p>
            </div>
          </Switch>
        </div>
      </div>
      <div>
        <Button
          onClick={() => inputsAreOk()}
          type="button"
          color={"primary"}
          radius={"sm"}
          fullWidth
          disabled={confirmBtnDisable}
          className="mb-3"
        >
          Continuă
        </Button>
        <Button
          onClick={() =>
            updateOnboardingDetails({
              ...onboardingDetails,
              clientSteps: OnboardClientSteps.Location,
            })
          }
          type="button"
          color={"default"}
          radius={"sm"}
          fullWidth
        >
          Înapoi
        </Button>
      </div>
    </OnboardingLayout>
  );
}
