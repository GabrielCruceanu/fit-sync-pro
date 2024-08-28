import { Metadata, ResolvingMetadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { GymProfileScreen } from "@/modules/static/profile/gym-profile-screen";
import { getGymProfileByUserName } from "@/utils/supabase/gym/gym-service";
import { getGymAvailabilityById } from "@/utils/supabase/gym/gym-availability";
import { getReviewsByBeneficiaryId } from "@/utils/supabase/review-service";
import { getGymGalleryByGymId } from "@/utils/supabase/gym/gym-gallery";

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
  const profile = await getGymProfileByUserName(
    username,
    createClient(cookies()),
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${profile.gymName}`,
    description: `FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.`,
    openGraph: {
      images: [
        ...previousImages,
        {
          url: profile.profilePictureUrl ? profile.profilePictureUrl : "",
          width: 800,
          height: 600,
          alt: `${profile.gymName}`,
        },
      ],
    },
  };
}

export default async function Page({ params: { username } }: Props) {
  const profile = await getGymProfileByUserName(
    username,
    createClient(cookies()),
  );
  const availabilities = await getGymAvailabilityById(
    profile.id,
    createClient(cookies()),
  );
  const reviews = await getReviewsByBeneficiaryId(
    profile.id,
    createClient(cookies()),
  );
  const gallery = await getGymGalleryByGymId(
    profile.id,
    createClient(cookies()),
  );

  return (
    <GymProfileScreen
      profile={profile}
      availabilities={availabilities}
      reviews={reviews}
      gallery={gallery}
    />
  );
}
