import { useStore } from "@/store";
import React, { useState } from "react";
import {
  handleInputRequired,
  validateIsPhoneNumber,
  validateIsWebsiteLink,
} from "@/helpers/helpers";
import { InputError, OnboardTrainerSteps } from "@/ts/enum";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export function TrainerOnboardingPersonalContact() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingTrainerDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingTrainerDetails,
  );

  const [phoneError, setPhoneError] = useState("");
  const [websiteError, setWebsiteError] = useState("");
  const [facebookError, setFacebookError] = useState("");
  const [instagramError, setInstagramError] = useState("");
  const [twitterError, setTwitterError] = useState("");

  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const handleSetPhoneNumber = (phoneNumber: string) => {
    setPhoneError("");
    updateOnboardingDetails({
      ...onboardingDetails,
      phoneNumber: phoneNumber,
    });
    setConfirmBtnDisable(false);
    if (handleInputRequired(phoneNumber)) {
      setPhoneError(InputError.InputRequired);
      return;
    }
    if (!validateIsPhoneNumber(phoneNumber)) {
      setPhoneError(InputError.OnlyNumbers);
      return;
    }
  };

  const inputsAreOk = () => {
    if (!onboardingDetails?.phoneNumber) {
      setPhoneError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      trainerSteps: OnboardTrainerSteps.NutritionExperience,
    });
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/trainer.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Contact Details"}
      body={"Please provide your contact details below."}
    >
      <div className="grid gap-2">
        <div className="grid md:grid-cols-2 gap-x-3 gap-y-4">
          {/*PhoneNumber*/}
          <Input
            id="phone"
            placeholder="+40770212948"
            type="text"
            label="Phone Number"
            value={onboardingDetails.phoneNumber}
            autoCapitalize="none"
            autoComplete="false"
            autoCorrect="off"
            variant="bordered"
            isRequired
            onValueChange={(e) => {
              handleSetPhoneNumber(e);
            }}
            color={phoneError ? "danger" : "default"}
            errorMessage={phoneError}
            isInvalid={!!phoneError}
          />
          {/*website*/}
          <Input
            id="website"
            placeholder="www.jon-doe.com"
            type="text"
            label="Website"
            value={onboardingDetails.website}
            autoCapitalize="none"
            autoComplete="false"
            autoCorrect="off"
            variant="bordered"
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                website: e,
              });
              setWebsiteError("");
              setConfirmBtnDisable(false);
            }}
            color={websiteError ? "danger" : "default"}
            errorMessage={websiteError}
            isInvalid={!!websiteError}
            onFocusChange={(e) => {
              if (!e) {
                !validateIsWebsiteLink(onboardingDetails.website!)
                  ? setWebsiteError(InputError.Website)
                  : null;
              }
            }}
          />
          {/*Facebook*/}
          <Input
            id="facebook"
            placeholder="https://www.facebook.com/jonDoe"
            type="text"
            label="Facebook"
            value={onboardingDetails.facebook}
            autoCapitalize="none"
            autoComplete="false"
            autoCorrect="off"
            variant="bordered"
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                facebook: e,
              });
              setFacebookError("");
              !validateIsWebsiteLink(onboardingDetails.facebook!);
              setConfirmBtnDisable(false);
            }}
            color={facebookError ? "danger" : "default"}
            errorMessage={facebookError}
            isInvalid={!!facebookError}
            onFocusChange={(e) => {
              if (!e) {
                !validateIsWebsiteLink(onboardingDetails.facebook!)
                  ? setFacebookError(InputError.Facebook)
                  : null;
              }
            }}
          />

          {/*Twitter*/}
          <Input
            id="twitter"
            placeholder="https://www.twitter.com/jonDoe"
            type="text"
            label="Twitter"
            value={onboardingDetails.twitter}
            autoCapitalize="none"
            autoComplete="false"
            autoCorrect="off"
            variant="bordered"
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                twitter: e,
              });
              setTwitterError("");
              !validateIsWebsiteLink(onboardingDetails.twitter!);
              setConfirmBtnDisable(false);
            }}
            color={twitterError ? "danger" : "default"}
            errorMessage={twitterError}
            isInvalid={!!twitterError}
            onFocusChange={(e) => {
              if (!e) {
                !validateIsWebsiteLink(onboardingDetails.twitter!)
                  ? setTwitterError(InputError.Twitter)
                  : null;
              }
            }}
          />

          {/*Instagram*/}
          <Input
            id="instagram"
            placeholder="https://www.instagram.com/jonDoe"
            type="text"
            label="Instagram"
            value={onboardingDetails.instagram}
            autoCapitalize="none"
            autoComplete="false"
            autoCorrect="off"
            variant="bordered"
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                instagram: e,
              });
              setInstagramError("");
              !validateIsWebsiteLink(onboardingDetails.instagram!);
              setConfirmBtnDisable(false);
            }}
            color={instagramError ? "danger" : "default"}
            errorMessage={instagramError}
            isInvalid={!!instagramError}
            onFocusChange={(e) => {
              if (!e) {
                !validateIsWebsiteLink(onboardingDetails.instagram!)
                  ? setInstagramError(InputError.Instagram)
                  : null;
              }
            }}
          />
        </div>
      </div>

      <Button
        onClick={() => inputsAreOk()}
        type="button"
        color={"primary"}
        radius={"sm"}
        fullWidth
        disabled={confirmBtnDisable}
      >
        Next
      </Button>
      <Button
        onClick={() =>
          updateOnboardingDetails({
            ...onboardingDetails,
            trainerSteps: OnboardTrainerSteps.PersonalDetails,
          })
        }
        type="button"
        color={"default"}
        radius={"sm"}
        fullWidth
      >
        Back
      </Button>
    </OnboardingLayout>
  );
}
