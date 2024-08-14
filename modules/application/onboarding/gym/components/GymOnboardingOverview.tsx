import { Button } from "@nextui-org/button";
import * as React from "react";
import { createClient } from "@/utils/supabase/create-client";
import { useRouter } from "next/navigation";
import { toast } from "@/components/shared/toast/use-toast";
import { Gym } from "@/ts/types";
import { createUserName, updateUser } from "@/utils/supabase/user-service";
import { OnboardingMessage } from "@/lib/validations/error-check";
import { UserType } from "@/ts/enum/user.enum";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { createGymProfile } from "@/utils/supabase/gym-service";
import { OnboardGymSteps } from "@/ts/enum/onboarding.enum";
import { useOnboardingStore } from "@/store/onboarding";

export function GymOnboardingOverview() {
  const supabase = createClient();
  const router = useRouter();
  const onboardingDetails = useOnboardingStore(
    (state) => state.onboarding.onboardingGymDetails,
  );
  const updateOnboardingDetails = useOnboardingStore(
    (state) => state.updateOnboardingGymDetails,
  );

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
        firstName: null,
        lastName: null,
        name: onboardingDetails.gymName!,
        profile_picture_url: null,
        userType: UserType.GYM,
        newsAndActualizations: onboardingDetails.newsAndActualizations!,
        notificationsWorkout: onboardingDetails.notificationsWorkout!,
        offersAndPromotions: onboardingDetails.offersAndPromotions!,
        notificationsNutrition: onboardingDetails.notificationsNutrition!,
        supabase: supabase,
      });

      const gym: Gym = {
        id: id,
        type: onboardingDetails.type!,
        gymName: onboardingDetails.gymName!,
        gymType: onboardingDetails.gymType!,
        username: onboardingDetails.username!,
        phoneNumber: onboardingDetails.phoneNumber!,
        country: onboardingDetails.country!,
        city: onboardingDetails.city!,
        state: onboardingDetails.county!,
        email: email,
        joined: today,
        profilePictureUrl: null,
        biography: null,
        activePersonalTrainers: null,
        certificate: null,
        website: onboardingDetails.website!,
        facebook: onboardingDetails.facebook!,
        instagram: onboardingDetails.instagram!,
        twitter: onboardingDetails.twitter!,
        gallery: null,
        hasPremium: false,
        availabilityDays: onboardingDetails.availabilityDays!,
        availabilityTime: onboardingDetails.availabilityTime!,
        street: onboardingDetails.street!,
      };

      // CREATE GYM PROFILE
      await createGymProfile(gym, supabase).then(() => {
        router.push("/dashboard", { scroll: false });
        toast({
          title: OnboardingMessage.Gym.Success.title,
          description: OnboardingMessage.Gym.Success.description,
          variant: OnboardingMessage.Gym.Success.variant,
        });
      });
    } else {
      router.refresh();
      return toast({
        title: OnboardingMessage.Gym.Error.title,
        description: OnboardingMessage.Gym.Error.description,
        variant: OnboardingMessage.Gym.Error.variant,
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
      body={"Please review your details before you continue."}
    >
      <div className="grid gap-2 gap-y-4 pb-[100px] md:pb-0">
        <div className="grid grid-cols-2 gap-x-3 gap-y-3">
          <p className="text-sm">
            User Type: <br />
            <strong className="text-medium capitalize">
              {onboardingDetails.type}
            </strong>
          </p>
          <p className="text-sm">
            Username: <br />
            <strong className="text-medium">
              {onboardingDetails.username}
            </strong>
          </p>
          <p className="text-sm">
            Gym Name: <br />
            <strong className="text-medium">{onboardingDetails.gymName}</strong>
          </p>
          <p className="text-sm">
            Gym Type: <br />
            <strong className="text-medium">{onboardingDetails.gymType}</strong>
          </p>
          <p className="text-sm">
            Active Personal Trainers: <br />
            <strong className="text-medium">
              {onboardingDetails.activePersonalTrainers}
            </strong>
          </p>
          <p className="text-sm">
            Phone number: <br />
            <strong className="text-medium">
              {onboardingDetails.phoneNumber}
            </strong>
          </p>
          <p className="text-sm">
            Country: <br />
            <strong className="text-medium">{onboardingDetails.country}</strong>
          </p>
          <p className="text-sm">
            State: <br />
            <strong className="text-medium">{onboardingDetails.county}</strong>
          </p>
          <p className="text-sm">
            City: <br />
            <strong className="text-medium">{onboardingDetails.city}</strong>
          </p>
          <p className="text-sm">
            Gym Street: <br />
            <strong className="text-medium">{onboardingDetails.street}</strong>
          </p>
        </div>
        <p className="text-sm">
          Availability Days: <br />
          <span className="flex flex-wrap capitalize">
            {onboardingDetails.availabilityDays?.map((day) => (
              <strong className="text-medium mr-2" key={day}>
                {day}
              </strong>
            ))}
          </span>
        </p>
        <p className="text-sm">
          Availability Time: <br />
          <span className="flex flex-wrap capitalize">
            {onboardingDetails.availabilityTime?.map((time) => (
              <strong className="text-medium mr-2" key={time}>
                {time}
              </strong>
            ))}
          </span>
        </p>
        <p className="text-sm">
          Website: <br />
          <strong className="text-medium">
            {onboardingDetails.website}
          </strong>{" "}
        </p>
        <p className="text-sm">
          Facebook: <br />
          <strong className="text-medium">
            {onboardingDetails.facebook}
          </strong>{" "}
        </p>
        <p className="text-sm">
          Instagram: <br />
          <strong className="text-medium">
            {onboardingDetails.instagram}
          </strong>{" "}
        </p>
        <p className="text-sm">
          Twitter: <br />
          <strong className="text-medium">
            {onboardingDetails.twitter}
          </strong>{" "}
        </p>
      </div>
      <div className="fixed md:relative bottom-0 left-0 w-full bg-background pt-2 pb-6 px-3 md:p-0">
        <div className="grid grid-cols-1 gap-x-3 gap-y-3">
          <Button
            onClick={() => handleConfirm()}
            type="button"
            color={"primary"}
            radius={"sm"}
            fullWidth
          >
            Confirm
          </Button>
          <Button
            onClick={() =>
              updateOnboardingDetails({
                ...onboardingDetails,
                gymSteps: OnboardGymSteps.Location,
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
