import { Metadata, ResolvingMetadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import React from "react";
import { TrainerProfileScreen } from "@/modules/static/profile";
import { getTrainerProfileByUserName } from "@/utils/supabase/trainer/trainer-service";
import { getReviewsByBeneficiaryId } from "@/utils/supabase/review-service";
import { getTrainerImageTransformsByTrainerId } from "@/utils/supabase/trainer/trainer-image-transforms";
import { getTrainerAvailabilityById } from "@/utils/supabase/trainer/trainer-availability";
import { getTrainerGalleryByTrainerId } from "@/utils/supabase/trainer/trainer-gallery";

type Props = {
  params: {
    username: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // Read route parameters
  const username = params.username;

  // Fetch data from the server
  const profile = await getTrainerProfileByUserName(
    username,
    createClient(cookies()),
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${profile.firstName} ${profile.lastName}`,
    description: `FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.`,
    openGraph: {
      images: [
        {
          url: profile.profilePictureUrl ? profile.profilePictureUrl : "",
          width: 800,
          height: 600,
          alt: `${profile.firstName} ${profile.lastName}`,
        },
        ...previousImages,
      ],
    },
  };
}

export default async function Page({ params: { username } }: Props) {
  const trainerProfile = await getTrainerProfileByUserName(
    username,
    createClient(cookies()),
  );
  const trainerAvailabilities = await getTrainerAvailabilityById(
    trainerProfile.id,
    createClient(cookies()),
  );
  const trainerReviews = await getReviewsByBeneficiaryId(
    trainerProfile.id,
    createClient(cookies()),
  );
  const trainerTransforms = await getTrainerImageTransformsByTrainerId(
    trainerProfile.id,
    createClient(cookies()),
  );
  const trainerGallery = await getTrainerGalleryByTrainerId(
    trainerProfile.id,
    createClient(cookies()),
  );

  return (
    <>
      <TrainerProfileScreen
        profile={trainerProfile}
        trainerAvailabilities={trainerAvailabilities}
        reviews={trainerReviews}
        transforms={trainerTransforms}
        gallery={trainerGallery}
      />
    </>
  );
}
