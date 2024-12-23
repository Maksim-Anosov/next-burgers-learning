// export const getIngredientsApi = () =>
//   fetch(`${URL}/ingredients`)
//     .then((res) => checkResponse<TIngredientsResponse>(res))
//     .then((data) => {
//       if (data?.success) return data.data;
//       return Promise.reject(data);

import { TIngredient } from "@/src/types/types";

const URL = process.env.NEXT_PUBLIC_API_URL;

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
    const res = await fetch(`${URL}/ingredients`);
    return checkResponse<TIngredientsResponse>(res);
  } catch (err) {
    return Promise.reject(err);
  }
}