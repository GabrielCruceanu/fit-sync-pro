import { useStore } from "@/store";
import React, { useState } from "react";
import {
  handleInputRequired,
  validateIsPhoneNumber,
  validateIsWebsiteLink,
} from "@/helpers/helpers";
import { InputError } from "@/ts/enum";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { OnboardGymSteps } from "@/ts/enum/onboarding.enum";

/**
 * This component handles the onboarding process for a nutritionist's personal contact details.
 * It collects information about the nutritionist's phone number, website, and social media links.
 * The component uses the `useStore` hook to get and update onboarding details.
 * It also uses local state for error handling and to disable the confirm button when necessary.
 * The component returns a form for the nutritionist to fill out their contact details.
 */

export function GymOnboardingPersonalContact() {
  // Using the store to get and update onboarding details
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingGymDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingGymDetails,
  );

  // State variables for error handling
  const [phoneError, setPhoneError] = useState("");
  const [websiteError, setWebsiteError] = useState("");
  const [facebookError, setFacebookError] = useState("");
  const [instagramError, setInstagramError] = useState("");
  const [twitterError, setTwitterError] = useState("");

  // State variable to disable the confirm button
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  /**
   * This function handles the input of the phone number.
   * It validates the input and updates the onboarding details accordingly.
   * @param {string} phoneNumber - The input phone number.
   */
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

  /**
   * This function checks if the inputs are valid and updates the onboarding details accordingly.
   */
  const inputsAreOk = () => {
    // Error handling for phone number
    if (!onboardingDetails?.phoneNumber) {
      setPhoneError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }

    // If inputs are valid, update the onboarding details and enable the confirm button
    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      gymSteps: OnboardGymSteps.Availability,
    });
  };

  // The component returns a form for the nutritionist to fill out their contact details
  return (
    <OnboardingLayout
      image={"/images/onboarding/gym.jpg"}
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
            gymSteps: OnboardGymSteps.PersonalDetails,
          })
        }
        type="button"
        color={"default"}
        variant={"ghost"}
        radius={"sm"}
        fullWidth
      >
        Back
      </Button>
    </OnboardingLayout>
  );
}
