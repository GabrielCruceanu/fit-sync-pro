import HowItWorkImage from "@/public/images/homepage/how-it-works.png";
import Image from "next/image";
import Link from "next/link";
import { ApplicationLinks } from "@/constants/links";
import {
  CalendarCheck,
  CircleUserRound,
  SearchCheck,
  Share,
  Target,
} from "lucide-react";

export default function ProHowItWorks() {
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
            Empowering Professionals to Transform Lives
          </h2>
          <p className="mb-3">
            Take your fitness business to the next level with FitSyncPro.
            Connect with clients, manage your services efficiently, and make a
            lasting impact on their fitness journeys.
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
                  Update your profile
                </h3>
                <p className="mb-2">
                  Fill out your profile with information about your services,
                  availability, and pricing. You can also add photos and videos
                  to showcase your work
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center mr-4 w-8 h-8 border border-divider rounded bg-gray-200 dark:text-background shrink-0">
                <Share className="w-5 h-5" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  Share your public page
                </h3>
                <p className="mb-2">
                  Share your public page with clients to let them know about
                  your services. You can also share your page on social media to
                  reach more clients.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center mr-4 w-8 h-8 border border-divider rounded bg-gray-200 dark:text-background shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  Enhance Client Engagement
                </h3>
                <p className="mb-2">
                  Monitor your clients’ progress with detailed logs of their
                  body metrics and fitness journey. Provide personalized
                  feedback and adjust plans to help them achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
