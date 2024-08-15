import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Briefcase, Calendar, MapPin, User } from "lucide-react";

type Props = {
  name: string | null;
  profession: string | null;
  gender: string | null;
  location: string | null;
  birthday: string | null;
  profilePictureUrl: string | null;
};

export const ProfileHero = ({
  name,
  profession,
  gender,
  location,
  birthday,
  profilePictureUrl,
}: Props) => {
  return (
    <section className="dark:bg-background">
      <div className="border-x border-divider grid py-8 px-6 mx-auto max-w-screen-xl md:py-24 lg:gap-12 xl:gap-0 lg:grid-cols-12 lg:min-h-[750px]">
        <div className="place-self-center mb-10 w-full mr-auto grid grid-cols-1 gap-y-6 order-2 md:order-1 lg:col-span-7 xl:mb-0">
          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight leading-none sm:text-5xl lg:text-6xl dark:text-white">
            {name}
          </h1>
          <div className="grid md:grid-cols-2 gap-3 gap-x-6 w-full">
            <div className="flex">
              <Briefcase />
              <p className="ml-3 max-w-2xl font-normal md:text-lg lg:text-xl">
                {profession}
              </p>
            </div>
            {gender && (
              <div className="flex">
                <User />
                <p className="ml-3 max-w-2xl font-normal  md:text-lg lg:text-xl">
                  {gender}
                </p>
              </div>
            )}
            <div className="flex">
              <MapPin />
              <p className="ml-3 max-w-2xl font-normal md:text-lg lg:text-xl">
                {location}
              </p>
            </div>
            <div className="flex ">
              <Calendar />
              <p className="ml-3 max-w-2xl font-normal md:text-lg lg:text-xl">
                {birthday}
              </p>
            </div>
          </div>
          <Button
            color="primary"
            className="inline-flex items-center py-3 px-5 font-semibold text-center rounded-lg text-background bg-foreground w-full lg:max-w-[300px]"
          >
            Contact
          </Button>
          {/*<ul className="block justify-between pt-6 mx-auto mt-10 border-t border-divider xl:flex dark:border-gray-700 dark:text-white">*/}
          {/*  <li className="flex items-center">*/}
          {/*    <span className="text-4xl font-extrabold lg:text-5xl">*/}
          {/*      {trainers?.length}*/}
          {/*    </span>*/}
          {/*    <div className="flex lg:block pl-4 text-xl">*/}
          {/*      <div className="mr-2 lg:mr-0">Trainers</div>*/}
          {/*    </div>*/}
          {/*  </li>*/}
          {/*  <li className="flex items-center">*/}
          {/*    <span className="text-4xl font-extrabold lg:text-5xl">*/}
          {/*      {nutritionists?.length}*/}
          {/*    </span>*/}
          {/*    <div className="flex lg:block pl-4 text-xl">*/}
          {/*      <div className="mr-2 lg:mr-0">Nutritionists</div>*/}
          {/*    </div>*/}
          {/*  </li>*/}
          {/*  <li className="flex items-center">*/}
          {/*    <span className="text-4xl font-extrabold lg:text-5xl">*/}
          {/*      {gyms?.length}*/}
          {/*    </span>*/}
          {/*    <div className="flex lg:block pl-4 text-xl">*/}
          {/*      <div className="mr-2 lg:mr-0">Gyms</div>*/}
          {/*    </div>*/}
          {/*  </li>*/}
          {/*</ul>*/}
        </div>
        <div className="place-self-center mb-10 mx-auto min-h-[375px] max-h-[375px] max-w-[375px] w-full flex items-center relative order-1 md:order-2 lg:col-span-5 xl:mb-0">
          <Image
            fill
            className="rounded-lg object-cover"
            src={profilePictureUrl ? profilePictureUrl : ""}
            loading={"lazy"}
            alt={name ? name : ""}
          />
        </div>
      </div>
    </section>
  );
};
