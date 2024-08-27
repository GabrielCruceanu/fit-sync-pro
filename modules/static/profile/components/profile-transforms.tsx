"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { TrainerImageTransforms } from "@/ts/types/trainer";
import { NutritionistImagesTransform } from "@/ts/types/nutritionist";

type Props = {
  transforms: TrainerImageTransforms | NutritionistImagesTransform;
};
export const ProfileTransforms = ({ transforms }: Props) => {
  return (
    <section className="bg-white dark:bg-background">
      <div className="md:border-x md:border-t border-divider items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
        <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
          Transforms
        </h2>
        {transforms.length === 0 && <p>No transforms yet.</p>}

        {transforms.length > 0 && (
          <>
            <p className="mb-4">
              Check out the amazing transformations that clients have achieved
              with the help of trainer.
            </p>
            <Swiper
              className="mt-6"
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={50}
              slidesPerView={1}
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
              {transforms.map((transform, index) => (
                <SwiperSlide key={index}>
                  <>
                    <p className="font-semibold text-center mb-4">
                      {transform.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 lg:max-w-4xl mx-auto">
                      <div className="flex flex-col items-center">
                        <h3 className="font-semibold text-xl mb-4">Before</h3>
                        <img
                          className="w-full h-[250px] lg:h-[500px] object-cover rounded"
                          src={transform.before_image_url}
                          alt="before"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <h3 className="font-semibold text-xl mb-4">After</h3>
                        <img
                          className="w-full h-[250px] lg:h-[500px] object-cover rounded"
                          src={transform.after_image_url}
                          alt="after"
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
