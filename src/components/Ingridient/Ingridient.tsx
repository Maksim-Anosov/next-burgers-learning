'use client';

import { TIngredient } from "@/src/types/types";
import { useAddIngridient } from "../store/orderStore";
import { IngridientUI } from "../ui";
import { FC } from "react";

interface IngridientProps {
  ingridient: TIngredient
}

export const Ingridient: FC<IngridientProps> = ({ ingridient }) => {
  const addIngridient = useAddIngridient();
  return <IngridientUI image={ingridient.image} price={ingridient.price} name={ingridient.name} onClick={() => addIngridient(ingridient)}/>;
}