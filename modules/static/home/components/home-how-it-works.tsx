import HowItWorkImage from "@/public/images/homepage/how-it-works.png";
import Image from "next/image";
import Link from "next/link";
import { ApplicationLinks } from "@/constants/links";
import {
  CalendarCheck,
  CircleUserRound,
  SearchCheck,
  Target,
} from "lucide-react";

export default function HomeHowItWorks() {
  return (
    <section className="bg-white dark:bg-background">
      <div className="md:border border-divider gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 md:py-24 lg:px-6">
        <Image
          src={HowItWorkImage}
          alt="How it works FitSyncPro"
          placeholder="blur"
          className="hidden lg:block lg:sticky top-10 mx-auto mb-4 w-fit md:mx-0 md:w-[500px] lg:w-[500px] lg:mb-0 rounded-lg"
        />
        <div className="">
          <span className="border border-divider px-2 py-1 inline-block rounded mb-4 text-sm">
            How it Works?
          </span>
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
            Starting Fast Your Fitness Journey with FitSyncPro
          </h2>
          <p className="mb-3">
            At FitSyncPro, we make it simple for you to connect with fitness
            professionals and start your journey towards a healthier lifestyle.
            Here’s how you can easily find trainers, nutritionists, and gyms,
            and how our platform helps you keep track of your progress:
          </p>
          <Link
            href={ApplicationLinks.signUp.link}
            className="inline-flex items-center py-3 px-5 font-semibold text-center rounded-lg text-background bg-foreground"
          >
            {ApplicationLinks.signUp.name}
          </Link>
          <div className="py-6 my-6 grid gap-3 border-y border-divider">
            <div className="flex">
              <div className="flex justify-center items-center mr-4 w-8 h-8 border border-divider rounded bg-gray-200 dark:text-background shrink-0">
                <CircleUserRound className="w-5 h-5" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  Create an account
                </h3>
                <p className="mb-2">
                  Sign up for an account to get started. You can create an
                  account using your email address or by signing in with Google
                  or Facebook.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center mr-4 w-8 h-8 border border-divider rounded bg-gray-200 dark:text-background shrink-0">
                <SearchCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  Find a professional
                </h3>
                <p className="mb-2">
                  Search for personal trainers, nutritionists, and gyms in your
                  area. You can filter your search by location, price, and
                  specialty to find the perfect match for your fitness goals.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center mr-4 w-8 h-8 border border-divider rounded bg-gray-200 dark:text-background shrink-0">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Book a session</h3>
                <p className="mb-2">
                  Once you've found a professional you like, you can book a
                  session with them directly through the app. You can schedule
                  sessions, track your progress, and communicate with your
                  professional all in one place.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center mr-4 w-8 h-8 border border-divider rounded bg-gray-200 dark:text-background shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  Achieve your goals
                </h3>
                <p className="mb-2">
                  Work with your professional to achieve your fitness goals. You
                  can track your progress, set new goals, and stay motivated
                  with the help of your professional.
                </p>
              </div>
            </div>
          </div>
          <p>
            We understand that finding the right professional can be difficult,
            so we've made it easy for you to find the perfect match for your
            fitness goals. Whether you're looking for a personal trainer,
            nutritionist, or gym, FitSyncPro has you covered. Sign up today to
            get started!
          </p>
        </div>
      </div>
    </section>
  );
}
