import { TIngredient } from "@/src/types/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function filerIngredients(ingridients: TIngredient[]) {
  const buns: TIngredient[] = [];
  const mains: TIngredient[] = [];
  const sauces: TIngredient[] = [];
  ingridients.forEach(item => {
    if (item.type === 'bun') buns.push(item);
    if (item.type === 'main') mains.push(item);
    if (item.type === 'sauce') sauces.push(item);
  });
  return { buns, mains, sauces };
}

export const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then(err => Promise.reject(err));