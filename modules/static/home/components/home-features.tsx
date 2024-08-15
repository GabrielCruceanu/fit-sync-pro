import { MonitorSmartphone, PocketKnife, ShieldCheck } from "lucide-react";
import { CardWithIcon } from "@/components/shared/card-with-icon";
import React from "react";

export default function HomeFeatures() {
  return (
    <section className="bg-white dark:bg-background">
      <div className="md:border-x md:border-t border-divider gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
        <div className="text-center">
          <span className="border border-divider px-2 py-1 inline-block rounded mb-4 text-sm">
            Features
          </span>
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
            Why Choose FitSyncPro?
          </h2>
          <p className="mb-3 max-w-[746px] mx-auto">
            Start your fitness journey today with FitSyncPro, and take the first
            step towards a healthier, fitter you. With our platform, achieving
            your fitness goals has never been easier.
          </p>
        </div>

        <div className="py-6 my-6 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <CardWithIcon
            icon={<MonitorSmartphone />}
            title={"User-Friendly Interface"}
            description={
              "Our platform is designed to be intuitive and easy to navigate, making your fitness journey smooth and hassle-free."
            }
          ></CardWithIcon>
          <CardWithIcon
            icon={<ShieldCheck />}
            title={"Trusted Professionals"}
            description={
              "We vet our trainers and nutritionists to ensure you get the best guidance and support."
            }
          ></CardWithIcon>
          <CardWithIcon
            icon={<PocketKnife />}
            title={"Comprehensive Features"}
            description={
              "From booking sessions to tracking progress, FitSyncPro provides all the tools you need in one place."
            }
          ></CardWithIcon>
        </div>
      </div>
    </section>
  );
}
