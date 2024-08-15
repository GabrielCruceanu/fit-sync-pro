import HowItWorkImage from "@/public/images/homepage/how-it-works.png";
import Image from "next/image";
import Link from "next/link";
import { ApplicationLinks } from "@/constants/links";
import {
  CalendarCheck,
  CircleUserRound,
  MonitorSmartphone,
  PocketKnife,
  SearchCheck,
  ShieldCheck,
  Target,
  User,
} from "lucide-react";
import { CardWithIcon } from "@/components/shared/card-with-icon";
import React from "react";

export default function ProFeatures() {
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
            Elevate your fitness career with FitSyncPro. Sign up today and take
            the first step towards growing your business and transforming lives.
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
            icon={<User />}
            title={"Comprehensive Profiles"}
            description={
              "Create a detailed profile with your biography, certifications, services offered, and client testimonials."
            }
          ></CardWithIcon>
          <CardWithIcon
            icon={<PocketKnife />}
            title={"Client Management Tools"}
            description={
              "Access detailed profiles of your clients, including their fitness goals, preferences, and progress."
            }
          ></CardWithIcon>
        </div>
      </div>
    </section>
  );
}
