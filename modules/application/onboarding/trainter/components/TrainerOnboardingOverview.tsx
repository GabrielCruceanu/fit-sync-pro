import { useStore } from "@/store";
import { Button } from "@nextui-org/button";
import * as React from "react";
import { useState } from "react";
import { OnboardTrainerSteps } from "@/ts/enum";
import { createClient } from "@/utils/supabase/create-client";
import { useRouter } from "next/navigation";
import { toast } from "@/components/use-toast";
import { Trainer } from "@/ts/types";
import { createUserName, updateUser } from "@/utils/supabase/user-service";
import { OnboardingMessage } from "@/lib/validations/error-check";
import { UserType } from "@/ts/enum/user.enum";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { createTrainerProfile } from "@/utils/supabase/trainer-service";

export function TrainerOnboardingOverview() {
  const supabase = createClient();
  const router = useRouter();
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingTrainerDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingTrainerDetails,
  );

  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const handleConfirm = async () => {
    const today = new Date().toISOString();
    const userResponse = await supabase.auth.getUser();
    const user = userResponse.data.user;
    const id = user?.id;
    const email = user?.email;

    if (user && id && email) {
      // CREATE USERNAME
      createUserName({
        user: user,
        username: onboardingDetails.username!,
        supabase: supabase,
      });

      // UPDATE USER
      updateUser({
        user: user,
        email: email,
        username: onboardingDetails.username!,
        firstName: onboardingDetails.firstname!,
        lastName: onboardingDetails.lastname!,
        name: null,
        profile_picture_url: null,
        userType: UserType.TRAINER,
        supabase: supabase,
      });

      const trainer: Trainer = {
        id: id,
        type: onboardingDetails.type!,
        firstName: onboardingDetails.firstname!,
        lastName: onboardingDetails.lastname!,
        username: onboardingDetails.username!,
        phoneNumber: onboardingDetails.phoneNumber!,
        country: onboardingDetails.country!,
        city: onboardingDetails.city!,
        state: onboardingDetails.county!,
        email: email,
        birthDate: onboardingDetails.birthdate?.date!,
        birthMonth: onboardingDetails.birthdate?.month!,
        birthYear: onboardingDetails.birthdate?.year!,
        gender: onboardingDetails.gender!,
        joined: today,
        profilePictureUrl: null,
        biography: null,
        completedClients: null,
        activeClients: null,
        certificate: null,
        website: onboardingDetails.website!,
        facebook: onboardingDetails.facebook!,
        instagram: onboardingDetails.instagram!,
        twitter: onboardingDetails.twitter!,
        gallery: null,
        hasPremium: false,
        isNutritionist: onboardingDetails.isNutritionist!,
        nutritionistDiets: onboardingDetails.nutritionistDiets!,
        nutritionistExperience: onboardingDetails.nutritionistExperience!,
        nutritionistType: onboardingDetails.nutritionistType!,
        trainingLocation: onboardingDetails.trainingLocation!,
        trainingOnlinePreferences:
          onboardingDetails.trainingPhysicalPreferences!,
        trainingPhysicalPreferences:
          onboardingDetails.trainingPhysicalPreferences!,
        trainingAvailabilityDays: onboardingDetails.trainingAvailabilityDays!,
        trainingAvailabilityTime: onboardingDetails.trainingAvailabilityTime!,
        gymStreet: onboardingDetails.gymStreet!,
        gymName: onboardingDetails.gymName!,
        trainingExperience: onboardingDetails.trainingExperience!,
        trainerType: onboardingDetails.trainerType!,
      };

      // CREATE TRAINER PROFILE
      await createTrainerProfile(user, trainer, supabase).then(() => {
        toast({
          title: OnboardingMessage.Trainer.Success.title,
          description: OnboardingMessage.Trainer.Success.description,
          variant: OnboardingMessage.Trainer.Success.variant,
        });
        router.push("/dashboard", { scroll: false });
      });
    } else {
      router.refresh();
      return toast({
        title: OnboardingMessage.Trainer.Error.title,
        description: OnboardingMessage.Trainer.Error.description,
        variant: OnboardingMessage.Trainer.Error.variant,
      });
    }
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/finish.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Prezentare generală"}
      body={"Un rezumat al informațiilor introduse."}
    >
      <div className="grid gap-2 gap-y-4 pb-[100px] md:pb-0">
        <div className="grid grid-cols-2 gap-x-3 gap-y-3">
          <p className="text-sm">
            Tip utilizator: <br />
            <strong className="text-medium capitalize">
              {onboardingDetails.type}
            </strong>
          </p>
          <p className="text-sm">
            Nume de utilizator: <br />
            <strong className="text-medium">
              {onboardingDetails.username}
            </strong>
          </p>
          <p className="text-sm">
            Prenume: <br />
            <strong className="text-medium">
              {onboardingDetails.firstname}
            </strong>
          </p>
          <p className="text-sm">
            Nume: <br />
            <strong className="text-medium">
              {onboardingDetails.lastname}
            </strong>
          </p>
          <p className="text-sm">
            Telefon: <br />
            <strong className="text-medium">
              {onboardingDetails.phoneNumber}
            </strong>
          </p>
          <p className="text-sm">
            Data nasterii: <br />
            <strong className="text-medium">
              {onboardingDetails.birthdate?.date}.
              {onboardingDetails.birthdate?.month}.
              {onboardingDetails.birthdate?.year}
            </strong>
          </p>
          <p className="text-sm">
            Gen: <br />
            <strong className="text-medium">{onboardingDetails.gender}</strong>
          </p>
          <p className="text-sm">
            Țară: <br />
            <strong className="text-medium">{onboardingDetails.country}</strong>
          </p>
          <p className="text-sm">
            Județ: <br />
            <strong className="text-medium">{onboardingDetails.county}</strong>
          </p>
          <p className="text-sm">
            Oraș / Sector: <br />
            <strong className="text-medium">{onboardingDetails.city}</strong>
          </p>
          <p className="text-sm">
            Stradă sală: <br />
            <strong className="text-medium">
              {onboardingDetails.gymStreet}
            </strong>
          </p>
          <p className="text-sm">
            Nume sală: <br />
            <strong className="text-medium">{onboardingDetails.gymName}</strong>
          </p>
          {onboardingDetails.isNutritionist && (
            <>
              <p className="text-sm">
                Tip Nutriționist: <br />
                <strong className="text-medium">
                  {onboardingDetails.nutritionistType}
                </strong>
              </p>
              <p className="text-sm">
                Experiență Nutriționist: <br />
                <strong className="text-medium">
                  {onboardingDetails.nutritionistExperience}
                </strong>
              </p>

              <p className="text-sm">
                Diete pentru: <br />
                <span className="flex flex-wrap capitalize">
                  {onboardingDetails.nutritionistDiets?.map((diets) => (
                    <strong className="text-medium mr-2" key={diets}>
                      {diets}
                    </strong>
                  ))}
                </span>
              </p>
            </>
          )}

          <p className="text-sm">
            Tip Antrenor: <br />
            <strong className="text-medium">
              {onboardingDetails.trainerType}
            </strong>
          </p>

          <p className="text-sm">
            Experiență Antrenor: <br />
            <strong className="text-medium">
              {onboardingDetails.trainingExperience}
            </strong>
          </p>

          <p className="text-sm">
            Mod de a antrena: <br />
            <strong className="text-medium">
              <span className="flex flex-wrap capitalize">
                {onboardingDetails.trainingLocation?.map((location) => (
                  <strong className="text-medium mr-2" key={location}>
                    {location}
                  </strong>
                ))}
              </span>
            </strong>
          </p>

          {onboardingDetails.trainingPhysicalPreferences && (
            <p className="text-sm">
              Antrenament fizic: <br />
              {onboardingDetails.trainingPhysicalPreferences?.map(
                (physical) => (
                  <strong className="text-medium mr-2 block" key={physical}>
                    {physical}
                  </strong>
                ),
              )}
            </p>
          )}

          {onboardingDetails.trainingOnlinePreferences && (
            <p className="text-sm">
              Antrenament online: <br />
              {onboardingDetails.trainingOnlinePreferences?.map((online) => (
                <strong className="text-medium mr-2 block" key={online}>
                  {online}
                </strong>
              ))}
            </p>
          )}

          <p className="text-sm">
            Zile antrenament: <br />
            <span className="flex flex-wrap capitalize">
              {onboardingDetails.trainingAvailabilityDays?.map((day) => (
                <strong className="text-medium mr-2" key={day}>
                  {day}
                </strong>
              ))}
            </span>
          </p>
          <p className="text-sm">
            Perioada antrenament: <br />
            <span className="flex flex-wrap capitalize">
              {onboardingDetails.trainingAvailabilityTime?.map((time) => (
                <strong className="text-medium mr-2" key={time}>
                  {time}
                </strong>
              ))}
            </span>
          </p>
        </div>
      </div>
      <div className="fixed md:relative bottom-0 left-0 w-full bg-background pt-2 pb-6 px-3 md:p-0">
        <div className="grid grid-cols-1 gap-x-3 gap-y-3">
          <Button
            onClick={() => handleConfirm()}
            type="button"
            color={"primary"}
            radius={"sm"}
            fullWidth
            disabled={confirmBtnDisable}
          >
            Confirm
          </Button>
          <Button
            onClick={() =>
              updateOnboardingDetails({
                ...onboardingDetails,
                trainerSteps: OnboardTrainerSteps.Availability,
              })
            }
            type="button"
            color={"default"}
            radius={"sm"}
            fullWidth
          >
            Back
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}
