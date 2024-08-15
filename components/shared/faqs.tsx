import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

export type FaqsProps = {
  faqs: Faq[];
};
type Faq = {
  question: string;
  answer: string;
};

export const Faqs = ({ faqs }: FaqsProps) => {
  return (
    <Accordion>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          aria-label={"Accordion item " + index}
          title={faq.question}
          className="py-3 px-5 mb-4 w-full font-semibold text-left text-gray-900 bg-background border border-divider rounded dark:text-gray-200"
        >
          <p className="font-normal">{faq.answer}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
