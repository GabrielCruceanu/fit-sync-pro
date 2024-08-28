import { SimpleCard } from "@/components/shared/simple-card";
import { NutritionistCertifications } from "@/ts/types/nutritionist";
import { TrainerCertifications } from "@/ts/types/trainer";

type Props = {
  certifications: NutritionistCertifications | TrainerCertifications | null;
};

export const ProfileCertifications = ({ certifications }: Props) => {
  return (
    <section className="bg-white dark:bg-background">
      <div className="md:border-x md:border-t border-divider items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
        <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
          Certifications and qualifications
        </h2>
        <p>
          {certifications && certifications.length > 0
            ? "Check out the certifications and qualifications that has achieved."
            : "No certifications yet."}
        </p>
        {certifications && certifications.length > 0 ? (
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((certification, index) => (
              <li key={index}>
                <SimpleCard
                  title={certification?.description}
                  description={certification?.name}
                ></SimpleCard>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
};
