import { TIngredient } from "@/src/types/types";
import { IngridientUI } from "../ui";
import { FC } from "react";

interface IngridientProps {
  ingridient: TIngredient
}

export const Ingridient: FC<IngridientProps> = ({ ingridient }) => {
  return <IngridientUI id={ingridient._id} image={ingridient.image} price={ingridient.price} name={ingridient.name} />;
}