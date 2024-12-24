'use client';

import { useQuery } from '@tanstack/react-query';
import { IngridientsUI } from '../ui';
import { getIngredientsApi } from '@/src/shared/api/burger-api';

export function Ingridients() {
  const { data } = useQuery({
    queryKey: ['ingridients'],
    queryFn: getIngredientsApi,
    staleTime: 5 * 60 * 1000,
  });

  console.log(data);

  const buns = data?.data.filter(item => item.type === 'bun');
  const mains = data?.data.filter(item => item.type === 'main');
  const sauces = data?.data.filter(item => item.type === 'sauce');

  return (
    <IngridientsUI
      buns={buns ?? []}
      mains={mains ?? []}
      sauces={sauces ?? []}
    />
  );
}
