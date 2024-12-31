import { filerIngredients } from '@/src/shared';
import { IngridientsUI } from '../ui';
import { getIngredientsApi } from '@/src/shared/api/burger-api';
import { ingridientService } from '@/src/services/ingridientsService';

export async function Ingridients() {
  // const { data } = await getIngredientsApi();
  const { data } = await ingridientService.getIngridients();
  const { buns, mains, sauces } = filerIngredients(data);

  return <IngridientsUI buns={buns} mains={mains} sauces={sauces} />;
}
