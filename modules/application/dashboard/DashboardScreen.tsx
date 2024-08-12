import { GoalCard } from "@/components/shared/goal-card";
import { QuoteCard } from "@/components/shared/quote-card";

export function DashboardScreen() {
  return (
    <>
      <section className="my-4">
        <p className="text-xl font-bold">Welcome, [Name]</p>
        <QuoteCard
          body="Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
          author="Albert Schweitzer"
        />
      </section>
      <section>
        <GoalCard name="Calories" type="Calories" actual={2000} finish={2500} />
        <GoalCard name="Water" type="Water" actual={5} finish={8} />
        <GoalCard name="Food" type="Food" actual={2500} finish={3000} />
        <GoalCard name="Steps" type="Steps" actual={1000} finish={5000} />
      </section>
    </>
  );
}
