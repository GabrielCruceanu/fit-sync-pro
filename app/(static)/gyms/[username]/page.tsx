import { Metadata, ResolvingMetadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

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
  console.log("username:", username);
  // Fetch data from the server
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase
    .from("gyms")
    .select("*")
    .eq("username", username);
  console.log("data:", data);
  console.log("error:", error);
  if (error) {
    throw error;
  }
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${data[0].gymName}`,
    description: `FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.`,
    openGraph: {
      images: [
        ...previousImages,
        {
          url: data[0].profile_picture,
          width: 800,
          height: 600,
          alt: `${data[0].first_name} ${data[0].last_name}`,
        },
      ],
    },
  };
}

export default async function Page({ params: { username } }: Props) {
  return <h1>{username}</h1>;
}
