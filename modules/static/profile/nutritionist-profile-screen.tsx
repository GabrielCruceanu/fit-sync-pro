import React from "react";
import { Nutritionist } from "@/ts/types";
import { ProfileHero } from "@/modules/static/profile/components/profile-hero";
import { AdsBanner } from "@/components/shared/ads-branner";
import { ProfileAbout } from "@/modules/static/profile/components/profile-about";
import { ProfileCertifications } from "@/modules/static/profile/components/profile-certifications";
import { ProfileAvailability } from "@/modules/static/profile/components/profile-availability";
import { Reviews } from "@/ts/types/review";
import { ProfileReview } from "@/modules/static/profile/components/profile-review";
import { ProfileTransforms } from "@/modules/static/profile/components/profile-transforms";
import { ProfileGallery } from "@/modules/static/profile/components/profile-gallery";
import {
  NutritionistAvailabilities,
  NutritionistCertifications,
  NutritionistImagesGallery,
  NutritionistImagesTransform,
} from "@/ts/types/nutritionist";

type Props = {
  profile: Nutritionist;
  availabilities: NutritionistAvailabilities;
  reviews: Reviews;
  transforms: NutritionistImagesTransform;
  gallery: NutritionistImagesGallery;
  certifications: NutritionistCertifications;
};

export function NutritionistProfileScreen({
  profile,
  availabilities,
  reviews,
  transforms,
  gallery,
  certifications,
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
    biography,
    certificate,
    nutritionistType,
    nutritionistExperience,
    cabinetStreet,
    cabinetName,
  } = profile;

  return (
    <>
      <ProfileHero
        name={firstName + " " + lastName}
        birthday={birthMonth + " / " + birthDate + " / " + birthYear}
        profilePictureUrl={profilePictureUrl}
        gender={gender}
        location={city + ", " + state + ", " + country}
        profession={nutritionistType}
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
        nutritionistExperience={nutritionistExperience}
        nutritionistType={nutritionistType}
        verifiedAsNutritionist={certificate}
      />
      <ProfileCertifications certifications={certifications} />
      <ProfileAvailability
        availabilities={availabilities}
        location={city + ", " + state + ", " + country}
        gymStreet={cabinetStreet}
        gymName={cabinetName}
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
