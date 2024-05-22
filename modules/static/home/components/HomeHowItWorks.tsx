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
      <div className="gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 lg:px-6">
        <Image
          src={HowItWorkImage}
          alt="How it works FitSyncPro"
          placeholder="blur"
          className="lg:sticky top-10 mx-auto mb-4 w-fit md:mx-0 md:w-[500px] lg:w-[500px] lg:mb-0 rounded-lg"
        />
        <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            How FitSyncPro Works
          </h2>
          <p className="mb-3 font-light lg:text-xl">
            FitSyncPro is a platform that helps clients find the best personal
            trainers and gyms in their area. We provide a wide range of
            trainers, nutritionists, and gyms to help you achieve your fitness
            goals.
          </p>
          <Link
            href={ApplicationLinks.signUp.link}
            className="mb-8 inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-600"
          >
            {ApplicationLinks.signUp.name}
            <svg
              className="ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <div className="py-8 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
            <div className="flex">
              <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
                <CircleUserRound className="w-5 h-5 text-primary-600 dark:text-primary-300" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Create an account
                </h3>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                  Sign up for an account to get started. You can create an
                  account using your email address or by signing in with Google
                  or Facebook.
                </p>
              </div>
            </div>
            <div className="flex pt-8">
              <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
                <SearchCheck className="w-5 h-5 text-primary-600 dark:text-primary-300" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Find a professional
                </h3>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                  Search for personal trainers, nutritionists, and gyms in your
                  area. You can filter your search by location, price, and
                  specialty to find the perfect match for your fitness goals.
                </p>
              </div>
            </div>
            <div className="flex pt-8">
              <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
                <CalendarCheck className="w-5 h-5 text-primary-600 dark:text-primary-300" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Book a session
                </h3>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                  Once you've found a professional you like, you can book a
                  session with them directly through the app. You can schedule
                  sessions, track your progress, and communicate with your
                  professional all in one place.
                </p>
              </div>
            </div>
            <div className="flex pt-8">
              <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
                <Target className="w-5 h-5 text-primary-600 dark:text-primary-300" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Achieve your goals
                </h3>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                  Work with your professional to achieve your fitness goals. You
                  can track your progress, set new goals, and stay motivated
                  with the help of your professional.
                </p>
              </div>
            </div>
          </div>
          <p className="lg:text-lg">
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
