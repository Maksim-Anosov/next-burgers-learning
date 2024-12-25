import { IngridientsUI } from '../ui';
import { getIngredientsApi } from '@/src/shared/api/burger-api';

export async function Ingridients() {
  const { data } = await getIngredientsApi();
  
  const buns = data.filter(item => item.type === 'bun');
  const mains = data.filter(item => item.type === 'main');
  const sauces = data.filter(item => item.type === 'sauce');

  return <IngridientsUI buns={buns} mains={mains} sauces={sauces} />;
}
