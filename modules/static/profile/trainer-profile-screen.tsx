import React from "react";
import { Trainer } from "@/ts/types";
import { ProfileHero } from "@/modules/static/profile/components/profile-hero";
import { AdsBanner } from "@/components/shared/ads-branner";
import { ProfileAbout } from "@/modules/static/profile/components/profile-about";
import { ProfileCertifications } from "@/modules/static/profile/components/profile-certifications";
import { ProfileAvailability } from "@/modules/static/profile/components/profile-availability";
import {
  TrainerAvailabilities,
  TrainerCertifications,
  TrainerImagesGallery,
  TrainerImageTransforms,
} from "@/ts/types/trainer";
import { Reviews } from "@/ts/types/review";
import { ProfileReview } from "@/modules/static/profile/components/profile-review";
import { ProfileTransforms } from "@/modules/static/profile/components/profile-transforms";
import { ProfileGallery } from "@/modules/static/profile/components/profile-gallery";

type Props = {
  profile: Trainer;
  trainerAvailabilities: TrainerAvailabilities;
  reviews: Reviews;
  transforms: TrainerImageTransforms;
  certifications: TrainerCertifications;
  gallery: TrainerImagesGallery;
};

export function TrainerProfileScreen({
  profile,
  trainerAvailabilities,
  reviews,
  transforms,
  certifications,
  gallery,
}: Props) {
  const {
    firstName,
    lastName,
    profilePictureUrl,
    birthDate,
    birthMonth,
    birthYear,
    gender,
    phoneNumber,
    email,
    twitter,
    instagram,
    facebook,
    website,
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
        phone={phoneNumber}
        email={email}
        website={website}
        instagram={instagram}
        facebook={facebook}
        twitter={twitter}
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
      <ProfileCertifications certifications={certifications} />
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
      <ProfileGallery gallery={gallery} />
    </>
  );
}
