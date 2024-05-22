import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { Link } from "@nextui-org/react";
import { ApplicationLinks } from "@/constants/links";
import Image from "next/image";
import HowItWorks from "@/public/images/homepage/how-it-works.png";

export default async function HomeHero() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: trainers } = await supabase.from("trainers").select();
  const { data: nutritionists } = await supabase.from("nutritionists").select();
  const { data: gyms } = await supabase.from("gyms").select();
  return (
    <section className="bg-gray-50 dark:bg-background">
      <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-12 xl:gap-0 lg:py-56 lg:grid-cols-12">
        <div className="place-self-center mb-10 xl:mb-0 lg:col-span-7 xl:col-span-8  mr-auto">
          <h1 className="mb-4 max-w-2xl text-3xl font-extrabold tracking-tight leading-none sm:text-5xl dark:text-white">
            Find the best trainers, nutritionists, and gyms
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            FitSyncPro is a platform that helps clients find the best personal
            trainers and gyms in their area. We provide a wide range of
            trainers, nutritionists, and gyms to help you achieve your fitness
            goals.
          </p>
          <Link
            color="primary"
            className="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-700"
            href={
              user
                ? ApplicationLinks.dashboard.link
                : ApplicationLinks.signUp.link
            }
          >
            Get started
          </Link>
          <ul className="block justify-between pt-12 mx-auto mt-14 border-t border-gray-300 xl:flex dark:border-gray-700 dark:text-white">
            <li className="flex items-center">
              <span className="text-4xl font-extrabold lg:text-5xl">
                {trainers?.length}
              </span>
              <div className="flex lg:block pl-4 text-xl text-gray-500 dark:text-gray-400">
                <div className="mr-2 lg:mr-0">Trainers</div>
              </div>
            </li>
            <li className="flex items-center">
              <span className="text-4xl font-extrabold lg:text-5xl">
                {nutritionists?.length}
              </span>
              <div className="flex lg:block pl-4 text-xl text-gray-500 dark:text-gray-400">
                <div className="mr-2 lg:mr-0">Nutritionists</div>
              </div>
            </li>
            <li className="flex items-center">
              <span className="text-4xl font-extrabold lg:text-5xl">
                {gyms?.length}
              </span>
              <div className="flex lg:block pl-4 text-xl text-gray-500 dark:text-gray-400">
                <div className="mr-2 lg:mr-0">Gyms</div>
              </div>
            </li>
          </ul>
        </div>
        {/*{!user && <AuthBox />}*/}
        <div className="place-self-center mb-10 xl:mb-0 lg:col-span-5 xl:col-span-4  ml-auto">
          <Image
            className="w-full rounded-lg"
            src={HowItWorks}
            alt="Experți nutriționiști"
          />
        </div>
      </div>
    </section>
  );
}
