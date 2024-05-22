import Image from "next/image";
import TrainerDesktop from "@/public/images/client/trainer-desktop.jpg";
import TrainerMobile from "@/public/images/client/trainer-mobile.jpg";
import NutritionistDesktop from "@/public/images/client/nutritionist-desktop.jpg";
import NutritionistMobile from "@/public/images/client/nutritionist-mobile.jpg";
import GymDesktop from "@/public/images/client/gym-desktop.jpg";
import GymMobile from "@/public/images/client/gym-mobile.jpg";
import { ApplicationLinks } from "@/constants/links";
import { Link } from "@nextui-org/react";

export default function HomeFeatures() {
  return (
    <section className="bg-white dark:bg-background">
      <div className="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
        <div className="gap-8 items-center lg:grid lg:grid-cols-2 lg:gap-y-96">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <Image
              className=" mb-4 w-full lg:mb-0 lg:hidden rounded-lg"
              src={NutritionistMobile}
              alt="Our certified nutrition experts"
            />
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Connect with certified nutrition experts
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Our certified nutritionists are dedicated to helping you achieve
              your wellness goals. Whether you're looking to lose weight, gain
              muscle, or simply improve your overall health, our nutritionists
              provide the expertise, guidance, and personalized meal plans you
              need to succeed.
            </p>
            <ul
              role="list"
              className="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Personalized meal plans
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Evidence-based guidance
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Continuous support
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Flexible scheduling
                </span>
              </li>
            </ul>
            <p className="mb-8 font-light lg:text-xl">
              Ready to take your nutrition journey to the next level?{" "}
              <Link href={ApplicationLinks.signUp.link} className="lg:text-xl">
                Sign up
              </Link>{" "}
              on FitSyncPro and connect with our expert nutritionists who can
              guide you every step of the way towards your wellness goals!
            </p>
          </div>
          <Image
            className="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
            src={NutritionistDesktop}
            alt="Our certified nutrition experts"
          />
        </div>

        <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
          <Image
            className=" mb-4 w-full lg:mb-0 lg:hidden rounded-lg"
            src={TrainerMobile}
            alt="Our certified fitness trainers"
          />
          <Image
            className="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
            src={TrainerDesktop}
            alt="antrenorii profesioniști de fitness"
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Connect with certified fitness trainers
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Our certified fitness trainers are here to help you reach your
              fitness goals. Whether you're looking to lose weight, build
              muscle, or improve your overall health, our trainers provide the
              expertise, motivation, and personalized training programs you need
              to succeed.
            </p>
            <ul
              role="list"
              className="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Personalized training programs
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Evidence-based guidance
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Continuous support
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Flexible scheduling
                </span>
              </li>
            </ul>
            <p className="font-light lg:text-xl">
              Ready to take your fitness journey to the next level?{" "}
              <Link href={ApplicationLinks.signUp.link} className="lg:text-xl">
                Sign up
              </Link>{" "}
              on FitSyncPro and connect with our expert trainers who can guide
              you every step of the way towards your fitness goals!
            </p>
          </div>
        </div>

        <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <Image
              src={GymMobile}
              className="mb-4 w-full lg:mb-0 lg:hidden rounded-lg"
              alt="Gym space"
            />
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Find the perfect fitness space
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Our diverse selection of fitness centers offers a range of
              amenities and classes to help you achieve your fitness goals. From
              state-of-the-art equipment to group fitness classes, our fitness
              spaces are designed to help you sweat, grow, and thrive.
            </p>
            <ul
              role="list"
              className="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  State-of-the-art equipment
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Clean and safe environment
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Community and culture
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Group fitness classes
                </span>
              </li>
            </ul>
            <p className="mb-8 font-light lg:text-xl">
              Ready to find your perfect fitness space?{" "}
              <Link href={ApplicationLinks.signUp.link} className="lg:text-xl">
                Sign up
              </Link>{" "}
              on FitSyncPro and discover the best gyms and fitness centers in
              your area!
            </p>
          </div>
          <Image
            src={GymDesktop}
            className="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
            alt="Gym space"
          />
        </div>
      </div>
    </section>
  );
}
