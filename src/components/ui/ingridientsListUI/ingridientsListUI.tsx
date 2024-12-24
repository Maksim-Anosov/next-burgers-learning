import { TIngredient } from '@/src/types/types';
import { FC } from 'react';
import { IngridientUI } from '../ingridientUI';

type IngridientsListUIProps = {
  ingridients: TIngredient[];
  addIngridient: () => void;
};

export const IngridientsListUI: FC<IngridientsListUIProps> = ({
  ingridients,
  addIngridient
}) => {
  return (
    <ul className='grid grid-cols-3 gap-4'>
      {ingridients.map(ingridient => {
        return (
          <IngridientUI
            key={ingridient._id}
            image={ingridient.image}
            price={ingridient.price}
            name={ingridient.name}
            addIngridient={addIngridient}
          />
        );
      })}
    </ul>
  );
};
