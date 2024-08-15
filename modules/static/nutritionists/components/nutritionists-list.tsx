"use client";
import React from "react";
import { ProCard } from "@/components/shared/pro-card";
import { Nutritionist, Trainer } from "@/ts/types";
import { useTrainersStore } from "@/store/trainers";
import { useNutritionistsStore } from "@/store/nutritionists";

export default function NutritionistsList() {
  const { filterNutritionists } = useNutritionistsStore((state) => state);
  return (
    filterNutritionists.length > 0 && (
      <section id="list" className="bg-white dark:bg-background">
        <div className="md:border-x md:border-t border-divider gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
          <div className="text-center">
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
              Find the best Nutritionists
            </h2>
            <p className="mb-3 max-w-[746px] mx-auto">
              All trainers searched by you will be displayed here.
            </p>
          </div>

          <div className="py-6 my-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filterNutritionists &&
              filterNutritionists?.map((nutritionist: Nutritionist) => (
                <ProCard
                  image={nutritionist.profilePictureUrl}
                  name={nutritionist.firstName + " " + nutritionist.lastName}
                  type={nutritionist.nutritionistType}
                  verified={nutritionist.certificate}
                  url={`/nutritionists/${nutritionist.username}`}
                  location={
                    nutritionist.country +
                    ", " +
                    nutritionist.state +
                    ", " +
                    nutritionist.city
                  }
                  experience={nutritionist.nutritionistExperience}
                />
              ))}
          </div>
        </div>
      </section>
    )
  );
}
