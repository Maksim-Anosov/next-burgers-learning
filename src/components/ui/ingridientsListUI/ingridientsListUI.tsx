import { TIngredient } from '@/src/types/types';
import { FC } from 'react';
import { Ingridient } from '../../Ingridient';

type IngridientsListUIProps = {
  ingridients: TIngredient[];
};

export const IngridientsListUI: FC<IngridientsListUIProps> = ({
  ingridients
}) => {
  return (
    <ul className='grid grid-cols-3 gap-4'>
      {ingridients.map(ingridient => {
        return (
          <Ingridient ingridient={ingridient} key={ingridient._id} />
        );
      })}
    </ul>
  );
};
