import React from "react";

export type CardWithIconProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
export const CardWithIcon = ({
  icon,
  title,
  description,
}: CardWithIconProps) => {
  return (
    <div className="p-6 bg-background border border-divider shadow-lg rounded-lg">
      <div className="flex justify-center items-center mr-4 w-11 h-11 border border-divider rounded bg-gray-200 dark:text-background shrink-0 mb-6">
        <div className="w-6 h-6 flex">{icon}</div>
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};
