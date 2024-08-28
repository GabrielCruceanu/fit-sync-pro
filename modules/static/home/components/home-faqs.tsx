"use client";
import React from "react";
import { Faqs } from "@/components/shared/faqs";
import { clientFaqs } from "@/constants/faqs";

export default function HomeFaqs() {
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
          <Faqs faqs={clientFaqs} />
        </div>
      </div>
    </section>
  );
}
