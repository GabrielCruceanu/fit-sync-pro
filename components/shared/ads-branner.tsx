import Image from "next/image";
import BannerUrl from "@/public/images/banner.jpg";

export const AdsBanner = () => {
  return (
    <section className="dark:bg-background">
      <div className="border-x md:border-t border-divider py-8 px-6 mx-auto max-w-screen-xl md:py-10">
        <Image
          src={BannerUrl}
          alt="ads branner"
          className="w-full max-w-[974px] mx-auto rounded"
        />
      </div>
    </section>
  );
};
