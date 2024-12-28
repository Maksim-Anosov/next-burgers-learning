import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
// import { persist } from 'zustand/middleware';
import { TIngredient } from '@/src/types/types';

export type TIngredientWithZIndex = TIngredient & { zIndex: number };

interface orderState {
  ingridients: TIngredientWithZIndex[];
  buns: TIngredient[];
  addIngridient: (ingridient: TIngredient) => void;
}

export const useOrderStore = create(
  devtools(
    // persist(
      immer<orderState>(set => ({
        ingridients: [],
        buns: [],
        addIngridient: ingridient =>
          set(state => {
            if (ingridient.type === 'bun') {
              state.buns = [ingridient];
            } else {
              state.ingridients.push({ ...ingridient, zIndex: (state.ingridients.length + 1)*-1 });
            }
          })
      })),
      {
        name: 'order',
        version: 1
      }
    )
  )
// );

export const useAddIngridient = () =>
  useOrderStore(state => state.addIngridient);
