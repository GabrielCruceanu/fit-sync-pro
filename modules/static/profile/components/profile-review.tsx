"use client";
import { Reviews } from "@/ts/types/review";
import { ReviewCard } from "@/components/shared/review-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { isMediumScreen, isSmallScreen } from "@/helpers/responsive";
import { calculateMedianRating } from "@/helpers/median-rating";

type Props = {
  reviews: Reviews;
  beneficiaryName: string;
};
export const ProfileReview = ({ reviews, beneficiaryName }: Props) => {
  return (
    <section className="bg-white dark:bg-background">
      <div className="md:border-x md:border-t border-divider items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
        <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
          Reviews
        </h2>
        {reviews.length === 0 && <p>No reviews yet</p>}

        {reviews.length > 0 && (
          <>
            <p className="mb-4">
              <strong>{beneficiaryName}</strong> has received {reviews.length}{" "}
              review
              {reviews.length > 1 && "s"} and has an average rating of{" "}
              {calculateMedianRating(reviews)} / 5 stars.
            </p>
            <Swiper
              className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={50}
              slidesPerView={isSmallScreen() ? 1 : isMediumScreen() ? 2 : 3}
              draggable
              grabCursor={true}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </section>
  );
};
