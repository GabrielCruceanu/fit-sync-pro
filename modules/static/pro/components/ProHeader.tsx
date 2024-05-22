import { Link } from "@nextui-org/react";
import { ApplicationLinks } from "@/constants/links";
import Image from "next/image";
import HowItWorks from "@/public/images/homepage/how-it-works.png";

export default function ProHeader() {
  return (
    <section className="bg-gray-50 dark:bg-background">
      <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-12 xl:gap-0 lg:py-56 lg:grid-cols-12">
        <div className="place-self-center mb-10 xl:mb-0 lg:col-span-7 xl:col-span-8  mr-auto">
          <h1 className="mb-4 max-w-2xl text-3xl font-extrabold tracking-tight leading-none sm:text-5xl dark:text-white">
            Grow your business with FitSyncPro
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            FitSyncPro is a platform that helps personal trainers,
            nutritionists, and gyms find clients in their area. We provide a
            wide range of clients to help you grow your business.
          </p>
          <Link
            color="primary"
            className="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-700"
            href={ApplicationLinks.signUp.link}
          >
            Get started
          </Link>
        </div>
        {/*{!user && <AuthBox />}*/}
        <div className="place-self-center mb-10 xl:mb-0 lg:col-span-5 xl:col-span-4  ml-auto">
          <Image
            className="w-full rounded-lg"
            src={HowItWorks}
            alt="Experți nutriționiști"
          />
        </div>
      </div>
    </section>
  );
}
