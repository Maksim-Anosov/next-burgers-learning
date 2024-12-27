import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { TIngredient } from "@/src/types/types";

interface orderState {
  ingridients: TIngredient[];
  addIngridient: (ingridient: TIngredient) => void;
}

export const useOrderStore = create(
  devtools(
    persist(
      immer<orderState>((set) => ({
        ingridients: [],
        addIngridient: (ingridient) =>
          set((state) => {
            state.ingridients.push(ingridient);
          }),
      })),
      {
        name: "order",
        version: 1,
      }
    )
  )
);

export const useAddIngridient = () => useOrderStore((state) => state.addIngridient);