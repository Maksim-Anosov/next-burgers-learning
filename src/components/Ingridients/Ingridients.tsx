'use client';

import { useQuery } from '@tanstack/react-query';
import { IngridientsUI } from '../ui';
import { getIngredientsApi } from '@/src/shared/api/burger-api';

export function Ingridients() {
  const { data: ingridients, isSuccess, isLoading, error } = useQuery({
    queryKey: ['ingridients'],
    queryFn: getIngredientsApi,
    staleTime: 5 * 60 * 1000
  });

  if (error) {
    console.log(error.message);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    const buns = ingridients.data.filter(item => item.type === 'bun');
    const mains = ingridients.data.filter(item => item.type === 'main');
    const sauces = ingridients.data.filter(item => item.type === 'sauce');

    return (
      <IngridientsUI
        buns={buns}
        mains={mains}
        sauces={sauces}
        addIngridient={() => console.log('addIngridient')}
      />
    );
  }
}
