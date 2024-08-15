import { Metadata, ResolvingMetadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import React from "react";
import { TrainerProfileScreen } from "@/modules/static/profile";
import { getTrainerProfileByUserName } from "@/utils/supabase/trainer-service";

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

  return (
    <>
      <TrainerProfileScreen profile={trainerProfile} />
    </>
  );
}
