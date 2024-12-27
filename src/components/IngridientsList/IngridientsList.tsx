'use client';

import { TIngredient } from '@/src/types/types';
import { IngridientsListUI } from '../ui/ingridientsListUI';
import { FC } from 'react';
import { useAddIngridient } from '../store/orderStore';

interface IngridientsListProps {
  ingridients: TIngredient[];
}

export const IngridientsList: FC<IngridientsListProps> = ({ ingridients }) => {
  const addIngridient = useAddIngridient();

  function handleClick(event: React.MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.dataset.id) {
      const ingridient = ingridients.find(
        ingridient => ingridient._id === target.dataset.id
      );
      if (ingridient) {
        addIngridient(ingridient);
      }
    }
  }

  return <IngridientsListUI onClick={handleClick} ingridients={ingridients} />;
};
