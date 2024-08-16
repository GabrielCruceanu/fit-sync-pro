import React from "react";
import { Trainer } from "@/ts/types";
import { ProfileHero } from "@/modules/static/profile/components/profile-hero";
import { AdsBanner } from "@/components/shared/ads-branner";
import { ProfileAbout } from "@/modules/static/profile/components/profile-about";
import {
  Certification,
  ProfileCertifications,
} from "@/modules/static/profile/components/profile-certifications";

type Props = {
  profile: Trainer;
};

export function TrainerProfileScreen({ profile }: Props) {
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
        location={city + " / " + state + " / " + country}
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
    </>
  );
}
