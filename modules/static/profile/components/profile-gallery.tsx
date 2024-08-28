"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { TrainerImagesGallery } from "@/ts/types/trainer";
import { isSmallScreen } from "@/helpers/responsive";
import { NutritionistImagesGallery } from "@/ts/types/nutritionist";

type Props = {
  gallery: TrainerImagesGallery | NutritionistImagesGallery;
};
export const ProfileGallery = ({ gallery }: Props) => {
  return (
    <section className="bg-white dark:bg-background">
      <div className="md:border-x md:border-t border-divider items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
        <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
          Gallery
        </h2>
        {gallery === null || (gallery && gallery.length === 0) ? (
          <p>No images yet.</p>
        ) : null}

        {gallery && gallery.length > 0 && (
          <>
            <p className="mb-4">
              Check out the amazing transformations that clients have achieved
              with the help of trainer.
            </p>
            <Swiper
              className="mt-6"
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={50}
              slidesPerView={isSmallScreen() ? 1 : 2}
              draggable
              grabCursor={true}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {gallery.map((image, index) => (
                <SwiperSlide key={index}>
                  <>
                    <div className="grid grid-cols-1 gap-4 lg:max-w-4xl mx-auto">
                      <div className="flex flex-col items-center">
                        <img
                          className="w-full h-[250px] lg:h-[500px] object-cover rounded"
                          src={image.image_url}
                          alt="before"
                        />
                      </div>
                    </div>
                  </>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </section>
  );
};
