import { Skeleton } from "@nextui-org/react";
import React from "react";

export function SettingsSkeleton() {
  return (
    <div className="lg:flex justify-center items-center min-h-screen">
      <div className="w-full relative flex md:min-h-[800px] flex-col items-center justify-center lg:px-0 lg:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] lg:rounded overflow-hidden lg:dark:border-1 lg:dark:border-default">
        <div className={`container px-4 py-8 lg:p-8 w-full`}>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-full">
            <div className="flex flex-col space-y-2 text-center">
              <div className="flex">
                <Skeleton className="w-3/12 rounded-lg mr-1">
                  <div className="h-10 rounded-lg bg-default-200"></div>
                </Skeleton>{" "}
                <Skeleton className="w-3/12 rounded-lg mr-1">
                  <div className="h-10 rounded-lg bg-default-200"></div>
                </Skeleton>{" "}
                <Skeleton className="w-3/12 rounded-lg mr-1">
                  <div className="h-10 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-3/12 rounded-lg">
                  <div className="h-10 rounded-lg bg-default-200"></div>
                </Skeleton>
              </div>

              <Skeleton className="w-full rounded-lg">
                <div className="h-[calc(100vh-180px)] w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
