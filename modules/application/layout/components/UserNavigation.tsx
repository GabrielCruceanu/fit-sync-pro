import React from "react";
import { UserLayout } from "@/ts/types";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import { CircleUserRound } from "lucide-react";

export function UserNavigation({
  imgUrl,
  fullName,
  username,
  userType,
}: UserLayout) {
  return (
    <>
      {imgUrl ? (
        <Image
          className="w-20 h-20 rounded-full"
          src={imgUrl}
          alt="user photo"
          width={200}
          height={200}
        />
      ) : (
        <CircleUserRound className="w-20 h-20" />
      )}

      <div className="mt-2 text-center">
        <h3 className="font-bold text-xl dark:text-white overflow-ellipsis truncate w-56">
          {fullName}
        </h3>
        <h6 className="text-sm">{userType.toUpperCase()}</h6>
        <Link href={"/" + username}>
          <span className="overflow-ellipsis truncate w-56 text-foreground">@{username}</span>
        </Link>
      </div>
    </>
  );
}
