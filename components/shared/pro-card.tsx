import Image from "next/image";
import { cn } from "@/lib/cn";
import { Briefcase, MapPin } from "lucide-react";
import Link from "next/link";

type Props = {
  image: string | null;
  verified: boolean | null;
  name: string | null;
  type: string | null;
  location: string;
  experience?: string | null;
  url: string;
  activePersonalTrainers?: number | null;
};
export const ProCard = ({
  image,
  verified,
  name,
  type,
  location,
  experience,
  url,
  activePersonalTrainers,
}: Props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-divider">
      <div className="grid gap-3">
        <div className="w-full flex max-h-[200px] rounded overflow-hidden">
          <Image
            width={295}
            height={200}
            placeholder={"blur"}
            blurDataURL={"https://via.placeholder.com/300"}
            className="object-cover w-full h-full"
            src={image ? image : "https://via.placeholder.com/300"}
            alt={name ? name : "Pro image"}
          />
        </div>
        <div className="flex justify-between">
          <p
            className={cn(
              "text-xs px-2 py-1 rounded flex items-center tracking-wide font-semibold",
              verified
                ? "bg-foreground text-background"
                : "bg-gray-300 text-black",
            )}
          >
            {verified ? "Verified" : "Unverified"}
          </p>
          <p
            className={
              "text-xs font-semibold px-2 py-1 rounded flex items-center tracking-wide bg-foreground text-background"
            }
          >
            {experience && experience + " years experience"}
            {activePersonalTrainers &&
              activePersonalTrainers +
                (activePersonalTrainers <= 1 ? " trainer" : " trainers")}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="text-sm flex">
            <Briefcase className="h-5" />
            <span className="ml-1">{type}</span>
          </div>
          <div className="text-sm flex">
            <MapPin className="h-5" />
            <span className="ml-1">{location}</span>
          </div>
        </div>
        <div className="flex">
          <Link
            href={url}
            className="p-2 border border-divider rounded mt-4 w-full text-center text-sm font-semibold"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
