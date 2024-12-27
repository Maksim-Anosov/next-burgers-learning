import { TIngredient } from '@/src/types/types';
import React, { FC } from 'react';
import { Ingridient } from '../../Ingridient';

type IngridientsListUIProps = {
  ingridients: TIngredient[];
  onClick: (event: React.MouseEvent) => void;
};

export const IngridientsListUI: FC<IngridientsListUIProps> = ({
  ingridients,
  onClick
}) => {
  return (
    <ul onClick={onClick} className='grid grid-cols-3 gap-4'>
      {ingridients.map(ingridient => {
        return <Ingridient ingridient={ingridient} key={ingridient._id} />;
      })}
    </ul>
  );
};
