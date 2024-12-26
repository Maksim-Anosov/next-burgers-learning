import { getIngredientsApi } from '@/src/shared/api/burger-api';
import { ConstructorElementUI } from '../constructorElementUI';
// import { TIngredient } from '@/src/types/types';
// import { FC } from 'react';

// interface BurgerConstructorUIProps {
//   constructorItems: TIngredient[];
// }

export const BurgerConstructorUI = async ({}) => {
  const { data } = await getIngredientsApi();
  return (
    <div className='flex flex-col gap-2 w-1/2 mx-auto'>
      <ConstructorElementUI
        text={data[0].name}
        price={data[0].price}
        thumbnail={data[0].image}
      />
    </div>
  );
};
