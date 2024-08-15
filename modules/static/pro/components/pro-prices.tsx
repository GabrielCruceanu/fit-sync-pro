import { Switch } from "@nextui-org/react";
import Link from "next/link";

export default function ProPrices() {
  return (
    <section className="bg-white dark:bg-background">
      <div className="md:border-x md:border-b border-divider gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <span className="border border-divider px-2 py-1 inline-block rounded mb-4 text-sm">
            Prices
          </span>
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
            Choose the Plan That Works for You
          </h2>
          <p className="mb-3">
            FitSyncPro offers a variety of plans to suit your needs. Whether
            you’re just starting out or looking to expand your services, we’ve
            got you covered.
          </p>
          <div className="flex items-center">
            <span className="text-base font-semibold">Monthly</span>

            <div>
              <Switch
                defaultSelected
                color={"success"}
                size="sm"
                className="ml-2 w-11 h-6 bg-gray-200 rounded-full border-2 border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-700"
              >
                <span className="text-base font-semibold">Yearly</span>
              </Switch>
            </div>
          </div>
        </div>
        <div className="mb-4 lg:mb-8 space-y-8 lg:grid lg:grid-cols-2 md:gap-12 xl:gap-16 lg:space-y-0">
          {/*Pricing CardWithIcon */}
          <div className="flex flex-col max-w-lg text-gray-900 dark:text-gray-400">
            <h3 className="font-semibold text-gray-500 uppercase dark:text-gray-400">
              Starter
            </h3>
            <div className="flex items-baseline my-4">
              <span className="mr-2 text-5xl font-bold text-gray-900 dark:text-white">
                Free
              </span>
            </div>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-300">
              Perfect for new trainers and nutritionists who want to establish
              their online presence.
            </p>
            {/*List*/}
            <ul role="list" className="my-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
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
                <span>
                  Basic profile with bio, services, and contact information
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
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
                <span>
                  Advertising and promotion banners shown on your profile
                </span>
              </li>
            </ul>
            <Link
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 font-semibold text-center rounded-lg text-background bg-foreground"
            >
              Start Now
            </Link>
          </div>
          {/*Pricing CardWithIcon*/}
          <div className="flex flex-col max-w-lg text-gray-900 dark:text-gray-400">
            <h3 className="font-semibold text-gray-500 uppercase dark:text-gray-400">
              PRO
            </h3>
            <div className="flex items-baseline my-4">
              <span className="mr-2 text-5xl font-extrabold text-gray-900 dark:text-white">
                $29
              </span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-300">
              Advanced features for trainers and nutritionists looking to grow
              their business. Perfect for professionals who want to connect with
              clients and manage their services more efficiently.
            </p>
            {/*List*/}
            <ul role="list" className="my-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
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
                <span>
                  All features from the Starter plan plus additional benefits
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
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
                <span>
                  Verifications and certifications displayed on your profile
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
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
                <span>
                  Access to the booking system with calendar synchronization
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
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
                <span>Enhanced profile with rich media content</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
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
                <span>
                  Priority customer support with a dedicated account manager
                </span>
              </li>
            </ul>
            <Link
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 font-semibold text-center rounded-lg text-background bg-foreground"
            >
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
