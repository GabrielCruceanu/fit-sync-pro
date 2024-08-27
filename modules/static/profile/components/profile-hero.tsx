import Image from "next/image";
import { Briefcase, Calendar, MapPin, User } from "lucide-react";
import { ProfileContactModal } from "@/modules/static/profile/components/profile-contact-modal";

type Props = {
  name: string | null;
  profession: string | null;
  gender: string | null;
  location: string | null;
  birthday: string | null;
  profilePictureUrl: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  instagram: string | null;
  facebook: string | null;
  twitter: string | null;
};

export const ProfileHero = ({
  name,
  profession,
  gender,
  location,
  birthday,
  profilePictureUrl,
  phone,
  email,
  website,
  instagram,
  facebook,
  twitter,
}: Props) => {
  return (
    <section className="dark:bg-background">
      <div className="border-x border-divider grid py-8 px-6 mx-auto max-w-screen-xl md:py-24 lg:gap-12 xl:gap-0 lg:grid-cols-12 lg:min-h-[750px]">
        <div className="place-self-center mb-10 w-full mr-auto grid grid-cols-1 gap-y-6 order-2 lg:order-1 lg:col-span-7 xl:mb-0">
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
          <ProfileContactModal
            phone={phone}
            email={email}
            instagram={instagram}
            facebook={facebook}
            website={website}
            twitter={twitter}
          />
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
          {/*      {nutritionist?.length}*/}
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
        <div className="place-self-center mb-10 mx-auto md:min-h-[375px] md:max-h-[375px] md:max-w-[375px] h-60 w-full flex items-center relative order-1 lg:order-2 lg:col-span-5 xl:mb-0">
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
