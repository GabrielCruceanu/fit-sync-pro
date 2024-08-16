import { SimpleCard } from "@/components/shared/simple-card";

type Props = {
  certifications: Certification[] | null;
};
export type Certification = {
  description: string;
  name: string;
};

export const ProfileCertifications = ({ certifications }: Props) => {
  return (
    certifications &&
    certifications.length > 0 && (
      <section className="bg-white dark:bg-background">
        <div className="md:border-x md:border-t border-divider items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
            Certifications and qualifications
          </h2>

          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((certification: Certification, index) => (
              <li key={index}>
                <SimpleCard
                  title={certification?.description}
                  description={certification?.name}
                ></SimpleCard>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  );
};
