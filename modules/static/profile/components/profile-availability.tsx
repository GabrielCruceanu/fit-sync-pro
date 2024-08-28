import { SimpleCard } from "@/components/shared/simple-card";
import { TrainerAvailabilities } from "@/ts/types/trainer";
import { daysOrder, formattedTime } from "@/helpers/days-order";
import { NutritionistAvailabilities } from "@/ts/types/nutritionist";
import { GymAvailabilities } from "@/ts/types/gym";

type Props = {
  availabilities:
    | TrainerAvailabilities
    | NutritionistAvailabilities
    | GymAvailabilities
    | null;
  location: string;
  trainingLocation?: string[] | null;
  trainingPhysicalPreferences?: string[] | null;
  trainingOnlinePreferences?: string[] | null;
  gymName: string | null;
  gymStreet: string | null;
};

export const ProfileAvailability = ({
  availabilities,
  location,
  trainingLocation,
  trainingOnlinePreferences,
  trainingPhysicalPreferences,
  gymStreet,
  gymName,
}: Props) => {
  const sortedAvailabilities = availabilities?.sort((a, b) => {
    return daysOrder.indexOf(a.day) - daysOrder.indexOf(b.day);
  });

  return (
    <section className="bg-white dark:bg-background">
      <div className="md:border-x md:border-t border-divider items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
        <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
          Availability and Location
        </h2>
        {!availabilities || availabilities.length === 0 ? (
          <p>No availability yet.</p>
        ) : null}
        {trainingLocation?.includes("Online") && (
          <p>
            <strong>Online:</strong> Available for on-demand virtual sessions
            like{" "}
            {trainingOnlinePreferences?.map((online) => {
              if (trainingOnlinePreferences?.length === 1) {
                return online;
              } else {
                return online + " and ";
              }
            })}
            .
          </p>
        )}
        {trainingLocation?.includes("In-Person") && (
          <p>
            <strong>In person:</strong> Available only at{" "}
            {gymName + " from " + gymStreet + " , " + location} to make sessions
            like{" "}
            {trainingPhysicalPreferences?.map((offline) => {
              if (trainingPhysicalPreferences?.length === 1) {
                return offline;
              } else {
                return offline + " and ";
              }
            })}
            .
          </p>
        )}
        {sortedAvailabilities && sortedAvailabilities.length > 0 && (
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedAvailabilities.map((availability, index) => (
              <li key={index}>
                <SimpleCard
                  title={availability?.day}
                  description={
                    formattedTime(availability?.start_time) +
                    " - " +
                    formattedTime(availability?.end_time)
                  }
                  smallText={
                    availability?.location_name &&
                    "at " + availability?.location_name
                  }
                ></SimpleCard>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
