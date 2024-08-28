import { format, parseISO } from "date-fns";

export const daysOrder = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const formattedTime = (dateString?: string) => {
  if (!dateString) {
    return "";
  }
  const date = parseISO(`1970-01-01T${dateString}`);
  const formattedTime = format(date, "HH:mm");

  return formattedTime;
};
