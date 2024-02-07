import { createClient } from "@/utils/supabase/create-client";
import { useStore } from "@/store";
import React, { useState } from "react";
import {
  formatPhoneNumber,
  handleInputRequired,
  validateIsPhoneNumber,
  validateIsWebsiteLink,
} from "@/helpers/helpers";
import { OnboardingInputError, OnboardTrainerSteps } from "@/ts/enum";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export function TrainerOnboardingPersonalContact() {
  const supabase = createClient();
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingTrainerDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingTrainerDetails,
  );
  const updateOnboardingType = useStore((state) => state.updateOnboardingType);

  const [phoneError, setPhoneError] = useState("");
  const [websiteError, setWebsiteError] = useState("");
  const [facebookError, setFacebookError] = useState("");
  const [instagramError, setInstagramError] = useState("");
  const [twitterError, setTwitterError] = useState("");

  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const handleSetPhoneNumber = (phoneNumber: string) => {
    const clearNumber = formatPhoneNumber(phoneNumber);

    setPhoneError("");
    updateOnboardingDetails({
      ...onboardingDetails,
      phoneNumber: clearNumber,
    });
    setConfirmBtnDisable(false);
    if (handleInputRequired(clearNumber)) {
      setPhoneError(OnboardingInputError.InputRequired);
      return;
    }
    if (!validateIsPhoneNumber(clearNumber)) {
      setPhoneError(OnboardingInputError.OnlyNumbers);
      return;
    }
  };

  const inputsAreOk = () => {
    if (!onboardingDetails?.phoneNumber) {
      setPhoneError(OnboardingInputError.InputRequired);
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
      image={"/images/onboarding/contact.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Detalii de contact"}
      body={"Completeaza campurile de contact pentru o vizibilitate mai buna."}
    >
      <div className="grid gap-2">
        <div className="grid md:grid-cols-2 gap-x-3 gap-y-4">
          {/*Telefon*/}
          <Input
            id="phone"
            placeholder="0770212948"
            type="text"
            label="Telefon"
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
            placeholder="www.jon-doe.ro"
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
                  ? setWebsiteError(OnboardingInputError.Website)
                  : null;
              }
            }}
          />
          {/*Facebook*/}
          <Input
            id="facebook"
            placeholder="Doe"
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
                  ? setFacebookError(OnboardingInputError.Facebook)
                  : null;
              }
            }}
          />

          {/*Twitter*/}
          <Input
            id="twitter"
            placeholder="Doe"
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
                  ? setTwitterError(OnboardingInputError.Twitter)
                  : null;
              }
            }}
          />

          {/*Instagram*/}
          <Input
            id="instagram"
            placeholder="Doe"
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
                  ? setInstagramError(OnboardingInputError.Instagram)
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
        Continuă
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
        Înapoi
      </Button>
    </OnboardingLayout>
  );
}
