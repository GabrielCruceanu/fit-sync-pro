import Image from "next/image";
import Hero from "@/public/images/antrenor/hero.png";
import { TrainersSearchForm } from "@/modules/static/trainers/components/trainers-search-form";

export default function TrainersHero() {
  return (
    <section className="dark:bg-background">
      <div className="border-x border-divider grid py-8 px-6 mx-auto max-w-screen-xl md:py-24 lg:gap-12 xl:gap-0 lg:grid-cols-12">
        <div className="place-self-center mb-10 xl:mb-0 lg:col-span-7 mr-auto">
          <h1 className="mb-6 max-w-2xl text-3xl font-semibold tracking-tight leading-none sm:text-5xl lg:text-6xl dark:text-white">
            Find the best Trainers
          </h1>
          <p className="mb-6 max-w-2xl font-light lg:mb-8 md:text-lg lg:text-xl">
            We helps you find the best trainers for your fitness goals. Whether
            you’re looking to lose weight, gain muscle, or improve your overall
            health, we have the perfect trainer for you.
          </p>

          <TrainersSearchForm />
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
