import { TIngredient } from "@/src/types/types";

// const URL = process.env.NEXT_PUBLIC_API_URL;

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

type TServerResponse<T> = {
  success: boolean;
} & T;

type TIngredientsResponse = TServerResponse<{
  data: TIngredient[];
}>;

export async function getIngredientsApi(): Promise<TIngredientsResponse> {
  try {
    const res = await fetch(`https://norma.nomoreparties.space/api/ingredients`);
    return checkResponse<TIngredientsResponse>(res);
  } catch (err) {
    return Promise.reject(err);
  }
}