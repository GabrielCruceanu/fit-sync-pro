import React from "react";
import { Trainer } from "@/ts/types";
import { ProfileHero } from "@/modules/static/profile/components/profile-hero";
import { AdsBanner } from "@/components/shared/ads-branner";
import { ProfileAbout } from "@/modules/static/profile/components/profile-about";
import {
  Certification,
  ProfileCertifications,
} from "@/modules/static/profile/components/profile-certifications";
import { ProfileAvailability } from "@/modules/static/profile/components/profile-availability";
import {
  TrainerAvailabilities,
  TrainerImageTransforms,
} from "@/ts/types/trainer";
import { Reviews } from "@/ts/types/review";
import { ProfileReview } from "@/modules/static/profile/components/profile-review";
import { ProfileTransforms } from "@/modules/static/profile/components/profile-transforms";

type Props = {
  profile: Trainer;
  trainerAvailabilities: TrainerAvailabilities;
  reviews: Reviews;
  transforms: TrainerImageTransforms;
};

export function TrainerProfileScreen({
  profile,
  trainerAvailabilities,
  reviews,
  transforms,
}: Props) {
  const {
    firstName,
    lastName,
    profilePictureUrl,
    birthDate,
    birthMonth,
    birthYear,
    gender,
    country,
    state,
    city,
    trainerType,
    trainingLocation,
    trainingPhysicalPreferences,
    trainingOnlinePreferences,
    gymStreet,
    gymName,
    biography,
    trainingExperience,
    certificate,
    certifications,
    nutritionistType,
    nutritionistExperience,
  } = profile;
  return (
    <>
      <ProfileHero
        name={firstName + " " + lastName}
        birthday={birthMonth + " / " + birthDate + " / " + birthYear}
        profilePictureUrl={profilePictureUrl}
        gender={gender}
        location={city + ", " + state + ", " + country}
        profession={trainerType}
      />
      <AdsBanner />
      <ProfileAbout
        biography={biography}
        trainerExperience={trainingExperience}
        trainerType={trainerType}
        verifiedAsTrainer={certificate}
        nutritionistExperience={nutritionistExperience}
        nutritionistType={nutritionistType}
        verifiedAsNutritionist={certificate}
      />
      <ProfileCertifications
        certifications={certifications as Certification[]}
      />
      <ProfileAvailability
        availabilities={trainerAvailabilities}
        location={city + ", " + state + ", " + country}
        trainingLocation={trainingLocation}
        trainingPhysicalPreferences={trainingPhysicalPreferences}
        trainingOnlinePreferences={trainingOnlinePreferences}
        gymStreet={gymStreet}
        gymName={gymName}
      />
      <ProfileReview
        reviews={reviews}
        beneficiaryName={firstName + " " + lastName}
      />
      <ProfileTransforms transforms={transforms} />
    </>
  );
}
