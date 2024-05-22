import { Link } from "@nextui-org/react";
import { WebsiteLinks } from "@/constants/links";

export default function HomeBeAPro() {
  return (
    <section className="bg-gray-50 dark:bg-background">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Become a professional on FitSyncPro
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            FitSyncPro is a platform that helps personal trainers,
            nutritionists, and gyms find clients in their area. We provide a
            wide range of clients to help you grow your business.
          </p>
          <Link
            href={WebsiteLinks.proPage.link}
            className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            More details
          </Link>
        </div>
      </div>
    </section>
  );
}
