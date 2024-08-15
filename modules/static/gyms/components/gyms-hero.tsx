import Image from "next/image";
import Hero from "@/public/images/gym/hero.png";
import { GymsSearchForm } from "@/modules/static/gyms/components/gyms-search-form";

export default function GymsHero() {
  return (
    <section className="dark:bg-background">
      <div className="border-x border-divider grid py-8 px-6 mx-auto max-w-screen-xl md:py-24 lg:gap-12 xl:gap-0 lg:grid-cols-12 lg:min-h-[750px]">
        <div className="place-self-center mb-10 xl:mb-0 lg:col-span-7 mr-auto">
          <h1 className="mb-6 max-w-2xl text-3xl font-semibold tracking-tight leading-none sm:text-5xl lg:text-6xl dark:text-white">
            Find the best Gyms
          </h1>
          <p className="mb-6 max-w-2xl font-light lg:mb-8 md:text-lg lg:text-xl">
            We helps you find the best gym for your fitness goals. Whether
            you’re looking to lose weight, gain muscle, or improve your overall
            health, we have the perfect gym for you.
          </p>

          <GymsSearchForm />
        </div>
        <div className="place-self-center mb-10 xl:mb-0 lg:col-span-5 ml-auto">
          <Image
            className="w-full rounded-lg"
            src={Hero}
            alt="Experți nutriționiști"
          />
        </div>
      </div>
    </section>
  );
}