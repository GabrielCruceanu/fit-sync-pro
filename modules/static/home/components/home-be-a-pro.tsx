import React from "react";
import { Link } from "@nextui-org/react";
import { WebsiteLinks } from "@/constants/links";

export default function HomeBeAPro() {
  return (
    <section className="bg-white dark:bg-background">
      <div className="md:border-x border-divider gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Join the FitSyncPro Community Today!
          </h2>
          <p className="mb-6">
            Don’t let your fitness goals wait. Click the link below to start
            your journey with FitSyncPro and see the difference professional
            guidance can make.
          </p>
          <Link
            href={WebsiteLinks.proPage.link}
            className="inline-flex items-center py-3 px-5 mr-4 font-semibold text-center rounded-lg text-background bg-foreground"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
