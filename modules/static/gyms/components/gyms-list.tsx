"use client";
import React from "react";
import { ProCard } from "@/components/shared/pro-card";
import { Gym, Nutritionist, Trainer } from "@/ts/types";
import { useTrainersStore } from "@/store/trainers";
import { useNutritionistsStore } from "@/store/nutritionists";
import { useGymsStore } from "@/store/gyms";

export default function GymsList() {
  const { filterGyms } = useGymsStore((state) => state);
  return (
    filterGyms.length > 0 && (
      <section id="list" className="bg-white dark:bg-background">
        <div className="md:border-x md:border-t border-divider gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
          <div className="text-center">
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
              Find the best Gyms
            </h2>
            <p className="mb-3 max-w-[746px] mx-auto">
              All gyms searched by you will be displayed here.
            </p>
          </div>

          <div className="py-6 my-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filterGyms &&
              filterGyms?.map((gym: Gym) => (
                <ProCard
                  image={gym.profilePictureUrl}
                  name={gym.gymName}
                  type={gym.gymType}
                  verified={gym.certificate}
                  url={`/nutritionists/${gym.username}`}
                  location={gym.country + ", " + gym.state + ", " + gym.city}
                  activePersonalTrainers={gym.activePersonalTrainers}
                />
              ))}
          </div>
        </div>
      </section>
    )
  );
}
