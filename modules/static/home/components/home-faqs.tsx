"use client";
import React from "react";
import { Faqs } from "@/components/shared/faqs";

export default function HomeFaqs() {
  const faqs = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section className="bg-white dark:bg-background">
      <div className="md:border-x md:border-b border-divider gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 md:py-24 lg:px-6">
        <div>
          <span className="border border-divider px-2 py-1 inline-block rounded mb-4 text-sm">
            FAQs
          </span>
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-semibold">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="">
          <Faqs faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
