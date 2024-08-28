"use client";
import React, { useState } from "react";
import { ProCard } from "@/components/shared/pro-card";
import { Nutritionist, Nutritionists } from "@/ts/types";
import { useNutritionistsStore } from "@/store/nutritionists";
import { NutritionistsSearchForm } from "@/modules/static/nutritionists/components/nutritionists-search-form";

export default function NutritionistsList({
  nutritionists,
}: {
  nutritionists: Nutritionists;
}) {
  const { filterNutritionists } = useNutritionistsStore((state) => state);
  const [showFilterNutritionists, setShowFilterNutritionists] =
    useState<boolean>(false);
  return (
    <section id="list" className="bg-white dark:bg-background">
      <div className="md:border-x md:border-t border-divider gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
        <div className="text-center">
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
            Find the best Nutritionists
          </h2>
          <p className="mb-6 max-w-[746px] mx-auto">
            We helps you find the best nutritionists for your fitness goals.
            Whether you’re looking to lose weight, gain muscle, or improve your
            overall health, we have the perfect nutritionist for you.
          </p>
          <NutritionistsSearchForm
            onClick={() => setShowFilterNutritionists(true)}
          />
        </div>
        {filterNutritionists.length > 0 && showFilterNutritionists ? (
          <div className="py-6 my-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filterNutritionists?.map((nutritionist: Nutritionist) => (
              <ProCard
                key={nutritionist.username}
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
        ) : filterNutritionists.length === 0 && showFilterNutritionists ? (
          <div className="text-center w-full mx-auto mt-6">
            <h2 className="text-2xl font-semibold">No nutritionists found</h2>
            <p className="mt-2">Please try again with different filters.</p>
          </div>
        ) : (
          <div className="py-6 my-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {nutritionists?.map((nutritionist: Nutritionist) => (
              <ProCard
                key={nutritionist.username}
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
        )}
      </div>
    </section>
  );
}
