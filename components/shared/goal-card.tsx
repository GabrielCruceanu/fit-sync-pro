import { cn } from "@/lib/cn";

export type GoalType = "Calories" | "Water" | "Food" | "Steps";

export interface Goal {
  name: string;
  type: GoalType;
  actual: number;
  finish: number;
}

export const GoalCard = (goal: Goal) => {
  return (
    <div
      className={cn(
        goal.type === "Calories" && "bg-red-50",
        goal.type === "Water" && "bg-blue-50",
        goal.type === "Food" && "bg-green-50",
        goal.type === "Steps" && "bg-warning-50",

        "group inline-flex items-center justify-between hover:bg-content2 flex-row-reverse",
      )}
    >
      <div className="flex justify-between">
        <h3 className="font-bold text-xl dark:text-white">{goal.name}</h3>
        <p className="text-sm">{goal.type}</p>
      </div>
      <p>
        {goal.actual} / {goal.finish}
      </p>
    </div>
  );
};
