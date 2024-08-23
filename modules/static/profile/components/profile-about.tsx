import { SimpleCard } from "@/components/shared/simple-card";

type Props = {
  biography: string | null;
  trainerExperience?: string | null;
  trainerType?: string | null;
  verifiedAsTrainer?: boolean | null;
  nutritionistExperience?: string | null;
  nutritionistType?: string | null;
  verifiedAsNutritionist?: boolean | null;
};

export const ProfileAbout = ({
  biography,
  trainerExperience,
  trainerType,
  verifiedAsTrainer,
  nutritionistExperience,
  nutritionistType,
  verifiedAsNutritionist,
}: Props) => {
  return (
    <section className="bg-white dark:bg-background">
      <div className="md:border-x md:border-t border-divider items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
        <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
          About
        </h2>
        {biography && <p>{biography}</p>}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trainerType && (
            <SimpleCard
              title={"Trainer Type"}
              description={trainerType}
            ></SimpleCard>
          )}
          <SimpleCard
            title={"Experience in training"}
            description={trainerExperience + " Years"}
          ></SimpleCard>
          {trainerType && (
            <SimpleCard
              title={"Verified as Trainer"}
              description={verifiedAsTrainer ? "Yes" : "No"}
            ></SimpleCard>
          )}
          {nutritionistType && (
            <>
              <SimpleCard
                title={"Nutritionist Type"}
                description={nutritionistType}
              ></SimpleCard>
              <SimpleCard
                title={"Experience in nutrition"}
                description={nutritionistExperience + " Years"}
              ></SimpleCard>
              <SimpleCard
                title={"Verified as Nutritionist"}
                description={verifiedAsNutritionist ? "Yes" : "No"}
              ></SimpleCard>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
