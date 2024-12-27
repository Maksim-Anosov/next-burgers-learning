import { TIngredient } from "@/src/types/types"
import { IngridientsListUI } from "../ui/ingridientsListUI"
import { FC } from "react"

interface IngridientsListProps {
  ingridients: TIngredient[]
}

export const IngridientsList: FC<IngridientsListProps> = ({ ingridients }) => {
  return (
    <IngridientsListUI ingridients={ingridients}/>
  )
}