import React from "react";
import { Gym } from "@/ts/types";
import { ProfileHero } from "@/modules/static/profile/components/profile-hero";
import { AdsBanner } from "@/components/shared/ads-branner";
import { ProfileAbout } from "@/modules/static/profile/components/profile-about";
import { ProfileAvailability } from "@/modules/static/profile/components/profile-availability";
import { Reviews } from "@/ts/types/review";
import { ProfileReview } from "@/modules/static/profile/components/profile-review";
import { ProfileGallery } from "@/modules/static/profile/components/profile-gallery";
import { GymAvailabilities, GymImagesGallery } from "@/ts/types/gym";

type Props = {
  profile: Gym;
  availabilities: GymAvailabilities;
  reviews: Reviews;
  gallery: GymImagesGallery;
};

export function GymProfileScreen({
  profile,
  availabilities,
  reviews,
  gallery,
}: Props) {
  const {
    gymName,
    profilePictureUrl,
    gymType,
    phoneNumber,
    email,
    twitter,
    instagram,
    facebook,
    website,
    country,
    state,
    city,
    street,
    biography,
    certificate,
  } = profile;

  return (
    <>
      <ProfileHero
        name={gymName}
        profilePictureUrl={profilePictureUrl}
        location={city + ", " + state + ", " + country}
        profession={gymType}
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
        nutritionistType={gymType}
        verifiedAsNutritionist={certificate}
      />
      <ProfileAvailability
        availabilities={availabilities}
        location={city + ", " + state + ", " + country}
        gymStreet={street}
        gymName={gymName}
      />
      <ProfileReview reviews={reviews} beneficiaryName={gymName} />
      <ProfileGallery gallery={gallery} />
    </>
  );
}
