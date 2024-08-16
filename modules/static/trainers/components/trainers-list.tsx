"use client";
import React, { useEffect } from "react";
import { ProCard } from "@/components/shared/pro-card";
import { Trainer } from "@/ts/types";
import { useTrainersStore } from "@/store/trainers";

export default function TrainersList() {
  const { filterTrainers } = useTrainersStore((state) => state);
  return (
    filterTrainers.length > 0 && (
      <section id="list" className="bg-white dark:bg-background">
        <div className="md:border-x md:border-t border-divider gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
          <div className="text-center">
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
              Find the best Trainers
            </h2>
            <p className="mb-3 max-w-[746px] mx-auto">
              All trainers searched by you will be displayed here.
            </p>
          </div>

          <div className="py-6 my-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filterTrainers &&
              filterTrainers?.map((trainer: Trainer) => (
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
        </div>
      </section>
    )
  );
}
