import { Metadata, ResolvingMetadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NutritionistProfileScreen } from "@/modules/static/profile/nutritionist-profile-screen";
import { getNutritionistProfileByUserName } from "@/utils/supabase/nutritionist/nutritionist-service";
import { getNutritionistAvailabilityById } from "@/utils/supabase/nutritionist/nutritionist-availability";
import { getReviewsByBeneficiaryId } from "@/utils/supabase/review-service";
import { getNutritionistImageTransformsByNutritionistId } from "@/utils/supabase/nutritionist/nutritionist-image-transforms";
import { getNutritionistCertificationsByNutritionistId } from "@/utils/supabase/nutritionist/nutritionist-certifications";
import { getNutritionistGalleryByNutritionistId } from "@/utils/supabase/nutritionist/nutritionist-gallery";

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
  const profile = await getNutritionistProfileByUserName(
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
        ...previousImages,
        {
          url: profile.profilePictureUrl ? profile.profilePictureUrl : "",
          width: 800,
          height: 600,
          alt: `${profile.firstName} ${profile.firstName}`,
        },
      ],
    },
  };
}

export default async function Page({ params: { username } }: Props) {
  const profile = await getNutritionistProfileByUserName(
    username,
    createClient(cookies()),
  );
  const availabilities = await getNutritionistAvailabilityById(
    profile.id,
    createClient(cookies()),
  );
  const reviews = await getReviewsByBeneficiaryId(
    profile.id,
    createClient(cookies()),
  );
  const transforms = await getNutritionistImageTransformsByNutritionistId(
    profile.id,
    createClient(cookies()),
  );
  const certifications = await getNutritionistCertificationsByNutritionistId(
    profile.id,
    createClient(cookies()),
  );
  const gallery = await getNutritionistGalleryByNutritionistId(
    profile.id,
    createClient(cookies()),
  );

  return (
    <NutritionistProfileScreen
      profile={profile}
      availabilities={availabilities}
      reviews={reviews}
      transforms={transforms}
      certifications={certifications}
      gallery={gallery}
    />
  );
}
