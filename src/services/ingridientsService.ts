import { TIngredientsResponse } from '@/src/types/types';
import { checkResponse } from '../shared';

export class IngridientService {
  static async getIngridients(): Promise<TIngredientsResponse> {
    const res = await fetch(
      `https://norma.nomoreparties.space/api/ingredients`,
      { next: { revalidate: 3600 } }
    );
    return checkResponse<TIngredientsResponse>(res);
  }
}
