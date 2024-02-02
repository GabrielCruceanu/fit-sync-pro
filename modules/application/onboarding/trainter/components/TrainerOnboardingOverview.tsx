import { useStore } from "@/store";
import { Button } from "@nextui-org/button";
import * as React from "react";
import { useState } from "react";
import { OnboardClientSteps, OnboardTrainerSteps } from "@/ts/enum";
import { createClient } from "@/utils/supabase/create-client";
import { useRouter } from "next/navigation";
import { toast } from "@/components/use-toast";
import { createClientProfile } from "@/utils/supabase/client-service";
import { TypedClientDetails, TypedTrainerDetails } from "@/ts/types";
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

      const trainer: TypedTrainerDetails = {
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
        description: null,
        completedClients: null,
        activeCients: null,
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
        gymName: onboardingDetails.gymName!,
        trainingExperience: onboardingDetails.trainingExperience!,
        trainerType: onboardingDetails.trainingType!,
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
            Adresa sală: <br />
            <strong className="text-medium">
              {onboardingDetails.city} / {onboardingDetails.county} /{" "}
              {onboardingDetails.country}
            </strong>
          </p>
          <p className="text-sm">
            Nume sală: <br />
            <strong className="text-medium">{onboardingDetails.gymName}</strong>
          </p>
          <p className="text-sm">
            Greutate: <br />
            <strong className="text-medium">{onboardingDetails.weight}</strong>
          </p>
          <p className="text-sm">
            Scop: <br />
            <strong className="text-medium">{onboardingDetails.goals}</strong>
          </p>
          <p className="text-sm">
            Preferințe alimentare: <br />
            <strong className="text-medium">
              {onboardingDetails.foodPreferences}
            </strong>
          </p>
          {onboardingDetails.haveFoodAllergies && (
            <p className="text-sm">
              Alergii: <br />
              <strong className="text-medium">
                {onboardingDetails.foodAllergiesType}
              </strong>
            </p>
          )}

          <p className="text-sm">
            Experiența: <br />
            <strong className="text-medium">
              {onboardingDetails.fitnessExperience}
            </strong>
          </p>
          <p className="text-sm">
            Locatie: <br />
            <strong className="text-medium">
              {onboardingDetails.trainingLocation}
            </strong>
          </p>
          <p className="text-sm">
            Tip: <br />
            <strong className="text-medium">
              {onboardingDetails.trainingLocation === "Fizic"
                ? onboardingDetails.trainingPhysicalPreferences
                : onboardingDetails.trainingOnlinePreferences}
            </strong>
          </p>
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
          <p className="text-sm">
            Notificari Antrenament: <br />
            <strong className="text-medium mr-2">
              {onboardingDetails.notificationsWorkout ? "Da" : "Nu"}
            </strong>
          </p>
          <p className="text-sm">
            Notificari Nutritie: <br />
            <strong className="text-medium mr-2">
              {onboardingDetails.notificationsNutrition ? "Da" : "Nu"}
            </strong>
          </p>
          <p className="text-sm">
            Notificari Noutati: <br />
            <strong className="text-medium mr-2">
              {onboardingDetails.newsAndActualizations ? "Da" : "Nu"}
            </strong>
          </p>
          <p className="text-sm">
            Notificari Oferte: <br />
            <strong className="text-medium mr-2">
              {onboardingDetails.offersAndPromotions ? "Da" : "Nu"}
            </strong>
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
            Înapoi
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}
