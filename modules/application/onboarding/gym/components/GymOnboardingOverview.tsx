import { useStore } from "@/store";
import { Button } from "@nextui-org/button";
import * as React from "react";
import { useState } from "react";
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

export function GymOnboardingOverview() {
  const supabase = createClient();
  const router = useRouter();
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingGymDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingGymDetails,
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
          title: OnboardingMessage.Trainer.Success.title,
          description: OnboardingMessage.Trainer.Success.description,
          variant: OnboardingMessage.Trainer.Success.variant,
        });
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
            Phone number: <br />
            <strong className="text-medium">
              {onboardingDetails.phoneNumber}
            </strong>
          </p>
          {/*<p className="text-sm">*/}
          {/*  Birthday: <br />*/}
          {/*  <strong className="text-medium">*/}
          {/*    {onboardingDetails.birthdate?.date}.*/}
          {/*    {onboardingDetails.birthdate?.month}.*/}
          {/*    {onboardingDetails.birthdate?.year}*/}
          {/*  </strong>*/}
          {/*</p>*/}
          {/*<p className="text-sm">*/}
          {/*  Gender: <br />*/}
          {/*  <strong className="text-medium">{onboardingDetails.gender}</strong>*/}
          {/*</p>*/}
          {/*<p className="text-sm">*/}
          {/*  Country: <br />*/}
          {/*  <strong className="text-medium">{onboardingDetails.country}</strong>*/}
          {/*</p>*/}
          {/*<p className="text-sm">*/}
          {/*  State: <br />*/}
          {/*  <strong className="text-medium">{onboardingDetails.county}</strong>*/}
          {/*</p>*/}
          {/*<p className="text-sm">*/}
          {/*  City: <br />*/}
          {/*  <strong className="text-medium">{onboardingDetails.city}</strong>*/}
          {/*</p>*/}
          {/*<p className="text-sm">*/}
          {/*  Cabinet Street: <br />*/}
          {/*  <strong className="text-medium">*/}
          {/*    {onboardingDetails.cabinetStreet}*/}
          {/*  </strong>*/}
          {/*</p>*/}
          {/*<p className="text-sm">*/}
          {/*  Cabinet Name: <br />*/}
          {/*  <strong className="text-medium">*/}
          {/*    {onboardingDetails.cabinetName}*/}
          {/*  </strong>*/}
          {/*</p>*/}
          {/*<p className="text-sm">*/}
          {/*  Nutritionist Type: <br />*/}
          {/*  <strong className="text-medium">*/}
          {/*    {onboardingDetails.nutritionistType}*/}
          {/*  </strong>*/}
          {/*</p>*/}
          {/*<p className="text-sm">*/}
          {/*  Nutritionist Experience: <br />*/}
          {/*  <strong className="text-medium">*/}
          {/*    {onboardingDetails.nutritionistExperience}*/}
          {/*  </strong>*/}
          {/*</p>*/}

          {/*<p className="text-sm">*/}
          {/*  Diets can provide: <br />*/}
          {/*  <span className="flex flex-wrap capitalize">*/}
          {/*    {onboardingDetails.nutritionistDiets?.map((diets) => (*/}
          {/*      <strong className="text-medium mr-2" key={diets}>*/}
          {/*        {diets}*/}
          {/*      </strong>*/}
          {/*    ))}*/}
          {/*  </span>*/}
          {/*</p>*/}

          {/*<p className="text-sm">*/}
          {/*  Consult mode: <br />*/}
          {/*  <strong className="text-medium">*/}
          {/*    <span className="flex flex-wrap capitalize">*/}
          {/*      {onboardingDetails.nutritionLocation?.map((location) => (*/}
          {/*        <strong className="text-medium mr-2" key={location}>*/}
          {/*          {location}*/}
          {/*        </strong>*/}
          {/*      ))}*/}
          {/*    </span>*/}
          {/*  </strong>*/}
          {/*</p>*/}

          {/*<p className="text-sm">*/}
          {/*  Availability Days: <br />*/}
          {/*  <span className="flex flex-wrap capitalize">*/}
          {/*    {onboardingDetails.nutritionAvailabilityDays?.map((day) => (*/}
          {/*      <strong className="text-medium mr-2" key={day}>*/}
          {/*        {day}*/}
          {/*      </strong>*/}
          {/*    ))}*/}
          {/*  </span>*/}
          {/*</p>*/}
          {/*<p className="text-sm">*/}
          {/*  Availability Time: <br />*/}
          {/*  <span className="flex flex-wrap capitalize">*/}
          {/*    {onboardingDetails.nutritionAvailabilityTime?.map((time) => (*/}
          {/*      <strong className="text-medium mr-2" key={time}>*/}
          {/*        {time}*/}
          {/*      </strong>*/}
          {/*    ))}*/}
          {/*  </span>*/}
          {/*</p>*/}
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
