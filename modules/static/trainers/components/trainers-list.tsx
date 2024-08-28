"use client";
import React, { useState } from "react";
import { ProCard } from "@/components/shared/pro-card";
import { Trainer, Trainers } from "@/ts/types";
import { useTrainersStore } from "@/store/trainers";
import { TrainersSearchForm } from "@/modules/static/trainers/components/trainers-search-form";

export default function TrainersList({ trainers }: { trainers: Trainers }) {
  const { filterTrainers } = useTrainersStore((state) => state);
  const [showFilterTrainers, setShowFilterTrainers] = useState<boolean>(false);
  return (
    <section id="list" className="bg-white dark:bg-background">
      <div className="md:border-x md:border-t border-divider gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
        <div className="text-center">
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
            Find the best Trainers
          </h2>
          <p className="mb-4 max-w-[746px] mx-auto">
            We helps you find the best trainers for your fitness goals. Whether
            you’re looking to lose weight, gain muscle, or improve your overall
            health, we have the perfect trainer for you.
          </p>
          <TrainersSearchForm onClick={() => setShowFilterTrainers(true)} />
        </div>

        {filterTrainers.length > 0 && showFilterTrainers ? (
          <div className="py-6 my-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filterTrainers?.map((trainer: Trainer) => (
              <ProCard
                image={trainer.profilePictureUrl}
                name={trainer.firstName + " " + trainer.lastName}
                type={trainer.trainerType}
                verified={trainer.certificate}
                url={`/trainers/${trainer.username}`}
                location={
                  trainer.country + ", " + trainer.state + ", " + trainer.city
                }
                experience={trainer.trainingExperience}
              />
            ))}
          </div>
        ) : filterTrainers.length === 0 && showFilterTrainers ? (
          <div className="text-center w-full mx-auto mt-6">
            <h2 className="text-2xl font-semibold">No trainers found</h2>
            <p className="mt-2">Please try again with different filters.</p>
          </div>
        ) : (
          <div className="py-6 my-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {trainers?.map((trainer: Trainer) => (
              <ProCard
                image={trainer.profilePictureUrl}
                name={trainer.firstName + " " + trainer.lastName}
                type={trainer.trainerType}
                verified={trainer.certificate}
                url={`/trainers/${trainer.username}`}
                location={
                  trainer.country + ", " + trainer.state + ", " + trainer.city
                }
                experience={trainer.trainingExperience}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
