"use client";
import { BearState, useBearStore } from "@/store/bearState";

export default function BearCounter() {
  const bears = useBearStore((useBearStore: BearState) => useBearStore.bears);
  const increasePopulation = useBearStore(
    (useBearStore: BearState) => useBearStore.increasePopulation,
  );
  const clearBears = useBearStore(
    (useBearStore: BearState) => useBearStore.removeAllBears,
  );
  return (
    <>
      <h1>{bears} around here...</h1>
      <button onClick={increasePopulation}>One up</button>{" "}
      <button onClick={clearBears}>Clear bears</button>
    </>
  );
}
