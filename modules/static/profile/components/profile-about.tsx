import Link from "next/link";
import { ApplicationLinks } from "@/constants/links";
import {
  CalendarCheck,
  CircleUserRound,
  SearchCheck,
  Target,
} from "lucide-react";
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
      <div className="md:border border-divider items-start py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:py-24 lg:px-6">
        <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
          About
        </h2>
        {biography && <p className="mb-3">{biography}</p>}

        <div>
          <SimpleCard
            title={"Experience in training"}
            description={trainerExperience + " Years"}
          ></SimpleCard>
        </div>
      </div>
    </section>
  );
};
