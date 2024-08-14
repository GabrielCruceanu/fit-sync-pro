import { cookies } from "next/headers";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import { ApplicationLinks, WebsiteLinks } from "@/constants/links";
import HowItWorksDark from "@/public/images/homepage/how-it-works-hero.png";

export default async function HomeHero() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: trainers } = await supabase.from("trainers").select();
  const { data: nutritionists } = await supabase.from("nutritionists").select();
  const { data: gyms } = await supabase.from("gyms").select();

  return (
    <section className="dark:bg-background">
      <div className="border-x border-divider grid py-8 px-6 mx-auto max-w-screen-xl md:py-24 lg:gap-12 xl:gap-0 lg:grid-cols-12">
        <div className="place-self-center mb-10 xl:mb-0 lg:col-span-7 mr-auto">
          <h1 className="mb-6 max-w-2xl text-3xl font-semibold tracking-tight leading-none sm:text-5xl lg:text-6xl dark:text-white">
            Find the best Trainers, Nutritionists, and Gyms
          </h1>
          <p className="mb-6 max-w-2xl font-light lg:mb-8 md:text-lg lg:text-xl">
            FitSyncPro is a platform that helps clients find the best personal
            trainers and gyms in their area. We provide a wide range of
            trainers, nutritionists, and gyms to help you achieve your fitness
            goals.
          </p>
          <Link
            color="primary"
            className="inline-flex items-center py-3 px-5 mr-4 font-semibold text-center rounded-lg text-background bg-foreground"
            href={ApplicationLinks.signUp.link}
          >
            Get Started
          </Link>
          <Link
            color="primary"
            className="inline-flex items-center py-3 px-5 font-semibold text-center rounded-lg text-background bg-foreground"
            href={WebsiteLinks.proPage.link}
          >
            I’m a professional
          </Link>
          <ul className="block justify-between pt-6 mx-auto mt-10 border-t border-divider xl:flex dark:border-gray-700 dark:text-white">
            <li className="flex items-center">
              <span className="text-4xl font-extrabold lg:text-5xl">
                {trainers?.length}
              </span>
              <div className="flex lg:block pl-4 text-xl">
                <div className="mr-2 lg:mr-0">Trainers</div>
              </div>
            </li>
            <li className="flex items-center">
              <span className="text-4xl font-extrabold lg:text-5xl">
                {nutritionists?.length}
              </span>
              <div className="flex lg:block pl-4 text-xl">
                <div className="mr-2 lg:mr-0">Nutritionists</div>
              </div>
            </li>
            <li className="flex items-center">
              <span className="text-4xl font-extrabold lg:text-5xl">
                {gyms?.length}
              </span>
              <div className="flex lg:block pl-4 text-xl">
                <div className="mr-2 lg:mr-0">Gyms</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="place-self-center mb-10 xl:mb-0 lg:col-span-5 ml-auto">
          <Image
            className="w-full rounded-lg"
            src={HowItWorksDark}
            alt="Experți nutriționiști"
          />
        </div>
      </div>
    </section>
  );
}
