import { Skeleton } from "@nextui-org/react";
import React from "react";
import { cn } from "@/lib/cn";

export function OnboardingSkeleton() {
  return (
    <div className="lg:flex justify-center items-center min-h-screen">
      <div className="w-full relative flex md:min-h-[800px] flex-col items-center justify-center md:grid lg:max-w-screen-xl lg:grid-cols-2 lg:px-0 lg:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] lg:rounded overflow-hidden lg:dark:border-1 lg:dark:border-default">
        <div className="relative flex p-4 md:px-8 h-full flex-col bg-muted lg:p-10 text-white dark:lg:border-r lg:flex lg:dark:border-default">
          <Skeleton
            className={cn(
              `absolute inset-0 bg-default-300 bg-opacity-60 bg-cover bg-center bg-no-repeat bg-blend-multiply`,
            )}
          />
        </div>
        <div className={`container px-4 py-8 lg:p-8`}>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[480px]">
            <div className="flex flex-col space-y-2 text-center">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-10 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-28 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>

            <Skeleton className="w-2/5 rounded-lg">
              <div className="min-h-unit-10 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
}
