import { useStore } from "@/store/auth";
import { Button } from "@nextui-org/button";
import * as React from "react";
import { useState } from "react";
import { OnboardClientSteps, TrainingLocation } from "@/ts/enum";
import { createClient } from "@/utils/supabase/create-client";
import { useRouter } from "next/navigation";
import { toast } from "@/components/shared/toast/use-toast";
import { createClientProfile } from "@/utils/supabase/client-service";
import { Client } from "@/ts/types";
import { createUserName, updateUser } from "@/utils/supabase/user-service";
import { OnboardingMessage } from "@/lib/validations/error-check";
import { UserType } from "@/ts/enum/user.enum";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";

export function ClientOnboardingOverview() {
  const supabase = createClient();
  const router = useRouter();
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingClientDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingClientDetails,
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
        userType: UserType.CLIENT,
        newsAndActualizations: onboardingDetails.newsAndActualizations!,
        notificationsWorkout: onboardingDetails.notificationsWorkout!,
        offersAndPromotions: onboardingDetails.offersAndPromotions!,
        notificationsNutrition: onboardingDetails.notificationsNutrition!,
        supabase: supabase,
      });

      const client: Client = {
        client_id: id,
        firstName: onboardingDetails.firstname!,
        lastName: onboardingDetails.lastname!,
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
        userType: UserType.CLIENT,
        username: onboardingDetails.username!,
        phone: onboardingDetails.phoneNumber!,
        height: onboardingDetails.height!,
        weight: onboardingDetails.weight!,
        goals: onboardingDetails.goals!,
        foodPreferences: onboardingDetails.foodPreferences!,
        foodAllergiesDescription: onboardingDetails.foodAllergiesDescription!,
        haveFoodAllergies: onboardingDetails.haveFoodAllergies!,
        foodAllergiesType: onboardingDetails.foodAllergiesType!,
        fitnessExperience: onboardingDetails.fitnessExperience!,
        trainingLocation: onboardingDetails.trainingLocation!,
        trainingOnlinePreferences:
          onboardingDetails.trainingInPersonPreferences!,
        trainingPhysicalPreferences:
          onboardingDetails.trainingInPersonPreferences!,
        trainingAvailabilityDays: onboardingDetails.trainingAvailabilityDays!,
        trainingAvailabilityTime: onboardingDetails.trainingAvailabilityTime!,
      };

      // CREATE CLIENT PROFILE
      await createClientProfile(client, supabase).then(() => {
        router.push("/dashboard", { scroll: false });
        toast({
          title: OnboardingMessage.Client.Success.title,
          description: OnboardingMessage.Client.Success.description,
          variant: OnboardingMessage.Client.Success.variant,
        });
      });
    } else {
      router.refresh();
      return toast({
        title: OnboardingMessage.Client.Error.title,
        description: OnboardingMessage.Client.Error.description,
        variant: OnboardingMessage.Client.Error.variant,
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
      title={"Get Started"}
      body={"Please review your details before you continue"}
    >
      <div className="grid gap-2 gap-y-4 pb-[100px] md:pb-0">
        <div className="grid grid-cols-2 gap-x-3 gap-y-3">
          <p className="text-sm">
            User type: <br />
            <strong className="text-medium">Client</strong>
          </p>
          <p className="text-sm">
            Username: <br />
            <strong className="text-medium">
              {onboardingDetails.username}
            </strong>
          </p>
          <p className="text-sm">
            Firstname: <br />
            <strong className="text-medium">
              {onboardingDetails.firstname}
            </strong>
          </p>
          <p className="text-sm">
            Lastname: <br />
            <strong className="text-medium">
              {onboardingDetails.lastname}
            </strong>
          </p>
          <p className="text-sm">
            Phone number: <br />
            <strong className="text-medium">
              {onboardingDetails.phoneNumber}
            </strong>
          </p>
          <p className="text-sm">
            Birthday: <br />
            <strong className="text-medium">
              {onboardingDetails.birthdate?.date}.
              {onboardingDetails.birthdate?.month}.
              {onboardingDetails.birthdate?.year}
            </strong>
          </p>
          <p className="text-sm">
            Gender: <br />
            <strong className="text-medium">{onboardingDetails.gender}</strong>
          </p>
          <p className="text-sm">
            Location: <br />
            <strong className="text-medium">
              {onboardingDetails.city} / {onboardingDetails.county} /{" "}
              {onboardingDetails.country}
            </strong>
          </p>
          <p className="text-sm">
            Height: <br />
            <strong className="text-medium">{onboardingDetails.height}</strong>
          </p>
          <p className="text-sm">
            Weight: <br />
            <strong className="text-medium">{onboardingDetails.weight}</strong>
          </p>
          <p className="text-sm">
            Goals: <br />
            <span className="flex flex-wrap capitalize">
              {onboardingDetails.goals?.map((goal) => (
                <strong className="text-medium mr-2" key={goal}>
                  {goal}
                </strong>
              ))}
            </span>
          </p>
          <p className="text-sm">
            Food preferences: <br />
            <span className="flex flex-wrap capitalize">
              {onboardingDetails.foodPreferences?.map((pref) => (
                <strong className="text-medium mr-2" key={pref}>
                  {pref}
                </strong>
              ))}
            </span>
          </p>
          {onboardingDetails.haveFoodAllergies && (
            <p className="text-sm">
              Allergies: <br />
              <strong className="text-medium">
                {onboardingDetails.foodAllergiesType}
              </strong>
            </p>
          )}

          <p className="text-sm">
            Fitness Experience: <br />
            <strong className="text-medium">
              {onboardingDetails.fitnessExperience}
            </strong>
          </p>
          <p className="text-sm">
            Training Location: <br />
            <strong className="text-medium">
              {onboardingDetails.trainingLocation}
            </strong>
          </p>
          <p className="text-sm">
            Training Type: <br />
            <strong className="text-medium">
              {onboardingDetails.trainingLocation === TrainingLocation.InPerson
                ? onboardingDetails.trainingInPersonPreferences
                : onboardingDetails.trainingOnlinePreferences}
            </strong>
          </p>
          <p className="text-sm">
            Training Availability Days: <br />
            <span className="flex flex-wrap capitalize">
              {onboardingDetails.trainingAvailabilityDays?.map((day) => (
                <strong className="text-medium mr-2" key={day}>
                  {day}
                </strong>
              ))}
            </span>
          </p>
          <p className="text-sm">
            Training Availability Time: <br />
            <span className="flex flex-wrap capitalize">
              {onboardingDetails.trainingAvailabilityTime?.map((time) => (
                <strong className="text-medium mr-2" key={time}>
                  {time}
                </strong>
              ))}
            </span>
          </p>
          <p className="text-sm">
            Notifications Workout: <br />
            <strong className="text-medium mr-2">
              {onboardingDetails.notificationsWorkout
                ? "I agree"
                : "I disagree"}
            </strong>
          </p>
          <p className="text-sm">
            Notificari Nutritie: <br />
            <strong className="text-medium mr-2">
              {onboardingDetails.notificationsNutrition
                ? "I agree"
                : "I disagree"}
            </strong>
          </p>
          <p className="text-sm">
            Notificari Noutati: <br />
            <strong className="text-medium mr-2">
              {onboardingDetails.newsAndActualizations
                ? "I agree"
                : "I disagree"}
            </strong>
          </p>
          <p className="text-sm">
            Notificari Oferte: <br />
            <strong className="text-medium mr-2">
              {onboardingDetails.offersAndPromotions ? "I agree" : "I disagree"}
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
                clientSteps: OnboardClientSteps.Notifications,
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
