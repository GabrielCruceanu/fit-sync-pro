"use client";
import React, { useState } from "react";
import { ProCard } from "@/components/shared/pro-card";
import { Gym, Gyms } from "@/ts/types";
import { useGymsStore } from "@/store/gyms";
import { GymsSearchForm } from "@/modules/static/gyms/components/gyms-search-form";

export default function GymsList({ gyms }: { gyms: Gyms }) {
  const { filterGyms } = useGymsStore((state) => state);
  const [showFilterGyms, setShowFilterGyms] = useState<boolean>(false);
  return (
    <section id="list" className="bg-white dark:bg-background">
      <div className="md:border-x md:border-t border-divider gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
        <div className="text-center">
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
            Find the best Gyms
          </h2>
          <p className="mb-6 max-w-[746px] mx-auto">
            We helps you find the best gym for your fitness goals. Whether
            you’re looking to lose weight, gain muscle, or improve your overall
            health, we have the perfect gym for you.
          </p>
          <GymsSearchForm onClick={() => setShowFilterGyms(true)} />
        </div>
        {filterGyms.length > 0 && showFilterGyms ? (
          <div className="py-6 my-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filterGyms &&
              filterGyms?.map((gym: Gym) => (
                <ProCard
                  key={gym.username}
                  image={gym.profilePictureUrl}
                  name={gym.gymName}
                  type={gym.gymType}
                  verified={gym.certificate}
                  url={`/gyms/${gym.username}`}
                  location={gym.country + ", " + gym.state + ", " + gym.city}
                  activePersonalTrainers={gym.activePersonalTrainers}
                />
              ))}
          </div>
        ) : filterGyms.length === 0 && showFilterGyms ? (
          <div className="text-center w-full mx-auto mt-6">
            <h2 className="text-2xl font-semibold">No gyms found</h2>
            <p className="mt-2">Please try again with different filters.</p>
          </div>
        ) : (
          <div className="py-6 my-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {gyms &&
              gyms?.map((gym: Gym) => (
                <ProCard
                  key={gym.username}
                  image={gym.profilePictureUrl}
                  name={gym.gymName}
                  type={gym.gymType}
                  verified={gym.certificate}
                  url={`/gyms/${gym.username}`}
                  location={gym.country + ", " + gym.state + ", " + gym.city}
                  activePersonalTrainers={gym.activePersonalTrainers}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
