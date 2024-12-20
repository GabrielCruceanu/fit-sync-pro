import { Link } from "@nextui-org/react";
import Image from "next/image";
import { ApplicationLinks } from "@/constants/links";
import HowItWorksDark from "@/public/images/homepage/how-it-works-hero.png";

export default async function ProHero() {
  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);
  // const { data: trainers } = await supabase.from("trainers").select();
  // const { data: nutritionist } = await supabase.from("nutritionist").select();
  // const { data: gyms } = await supabase.from("gyms").select();

  return (
    <section className="dark:bg-background">
      <div className="border-x border-divider grid py-8 px-6 mx-auto max-w-screen-xl md:py-24 lg:gap-12 xl:gap-0 lg:grid-cols-12 lg:min-h-[750px]">
        <div className="place-self-center mb-10 xl:mb-0 lg:col-span-7 mr-auto">
          <h1 className="mb-6 max-w-2xl text-3xl font-semibold tracking-tight leading-none sm:text-5xl lg:text-6xl dark:text-white">
            Find More Clients, and Grow Your Business
          </h1>
          <p className="mb-6 max-w-2xl font-light lg:mb-8 md:text-lg lg:text-xl">
            FitSyncPro is the ultimate platform for fitness professionals like
            you. Whether you’re a personal trainer, nutritionist, or gym owner,
            FitSyncPro provides the tools and visibility you need to expand your
            reach, manage your clients efficiently, and help more people achieve
            their fitness goals.
          </p>
          <Link
            color="primary"
            className="inline-flex items-center py-3 px-5 mr-4 font-semibold text-center rounded-lg text-background bg-foreground"
            href={ApplicationLinks.signUp.link}
          >
            Get Started
          </Link>
          {/*<ul className="block justify-between pt-6 mx-auto mt-10 border-t border-divider xl:flex dark:border-gray-700 dark:text-white">*/}
          {/*  <li className="flex items-center">*/}
          {/*    <span className="text-4xl font-extrabold lg:text-5xl">*/}
          {/*      {trainers?.length}*/}
          {/*    </span>*/}
          {/*    <div className="flex lg:block pl-4 text-xl">*/}
          {/*      <div className="mr-2 lg:mr-0">Trainers</div>*/}
          {/*    </div>*/}
          {/*  </li>*/}
          {/*  <li className="flex items-center">*/}
          {/*    <span className="text-4xl font-extrabold lg:text-5xl">*/}
          {/*      {nutritionist?.length}*/}
          {/*    </span>*/}
          {/*    <div className="flex lg:block pl-4 text-xl">*/}
          {/*      <div className="mr-2 lg:mr-0">Nutritionists</div>*/}
          {/*    </div>*/}
          {/*  </li>*/}
          {/*  <li className="flex items-center">*/}
          {/*    <span className="text-4xl font-extrabold lg:text-5xl">*/}
          {/*      {gyms?.length}*/}
          {/*    </span>*/}
          {/*    <div className="flex lg:block pl-4 text-xl">*/}
          {/*      <div className="mr-2 lg:mr-0">Gyms</div>*/}
          {/*    </div>*/}
          {/*  </li>*/}
          {/*</ul>*/}
        </div>
        <div className="place-self-center mb-10 xl:mb-0 lg:col-span-5 mx-auto min-h-[375px] ">
          <Image
            className="w-full rounded-lg"
            src={HowItWorksDark}
            loading={"lazy"}
            alt="Hero image"
          />
        </div>
      </div>
    </section>
  );
}
