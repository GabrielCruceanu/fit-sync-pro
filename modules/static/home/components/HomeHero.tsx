import { Button } from "@nextui-org/button";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { cn } from "@nextui-org/react";
import AuthBox from "@/modules/static/home/components/AuthBox";

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
      <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div
          className={cn(
            "place-self-center mb-10 xl:mb-0",
            user !== null
              ? "lg:col-span-12 xl:col-span-12 mx-auto"
              : "lg:col-span-7 xl:col-span-8  mr-auto",
          )}
        >
          <h1 className="mb-4 max-w-2xl text-3xl font-extrabold tracking-tight leading-none sm:text-5xl dark:text-white">
            Întăriți călătoria dvs. de fitness
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Înscrieți-vă în FitSync pentru a descoperi antrenori, nutriționiști
            și săli de sport adaptate la obiectivele dvs. de fitness.
          </p>
          <Button
            color="primary"
            className="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-700"
          >
            Aflați mai multe
          </Button>
          <ul className="block justify-between pt-12 mx-auto mt-14 border-t border-gray-300 xl:flex dark:border-gray-700 dark:text-white">
            <li className="flex items-center">
              <span className="text-4xl font-extrabold lg:text-5xl">
                {trainers?.length}
              </span>
              <div className="flex lg:block pl-4 text-xl text-gray-500 dark:text-gray-400">
                <div className="mr-2 lg:mr-0">Antrenori</div>
                <div>Personali</div>
              </div>
            </li>
            <li className="flex items-center">
              <span className="text-4xl font-extrabold lg:text-5xl">
                {nutritionists?.length}
              </span>
              <div className="flex lg:block pl-4 text-xl text-gray-500 dark:text-gray-400">
                <div className="mr-2 lg:mr-0">Nutriționiști</div>
                <div>Acreditați</div>
              </div>
            </li>
            <li className="flex items-center">
              <span className="text-4xl font-extrabold lg:text-5xl">
                {gyms?.length}
              </span>
              <div className="flex lg:block pl-4 text-xl text-gray-500 dark:text-gray-400">
                <div className="mr-2 lg:mr-0">Săli de</div>
                <div>Antrenament</div>
              </div>
            </li>
          </ul>
        </div>
        {!user && <AuthBox />}
      </div>
    </section>
  );
}
