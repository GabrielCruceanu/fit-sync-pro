"use client";
import React from "react";
import { cn } from "@/lib/cn";

export function OnboardingLayout({
  title,
  body,
  image,
  quote,
  author,
  children,
}: {
  title: string;
  image: string;
  quote: string;
  author: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <div className="lg:flex justify-center items-center min-h-screen">
      <div className="w-full relative flex md:min-h-[800px] flex-col items-center justify-center md:grid lg:max-w-screen-xl lg:grid-cols-2 lg:px-0 lg:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] lg:rounded overflow-hidden lg:dark:border-1 lg:dark:border-default">
        <div className="relative flex p-4 md:px-8 h-full flex-col bg-muted lg:p-10 text-white dark:lg:border-r lg:flex lg:dark:border-default">
          <div
            style={{ backgroundImage: `url('${image}')` }}
            className={cn(
              `absolute inset-0 bg-zinc-900 bg-opacity-60 bg-cover bg-center bg-no-repeat bg-blend-multiply`,
            )}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            FitSyncPro
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">&ldquo;{quote}&rdquo;</p>
              <footer className="text-sm">{author}</footer>
            </blockquote>
          </div>
        </div>
        <div className={`container px-4 py-8 lg:p-8`}>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[480px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
              <p className="text-sm text-muted-foreground">{body}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
