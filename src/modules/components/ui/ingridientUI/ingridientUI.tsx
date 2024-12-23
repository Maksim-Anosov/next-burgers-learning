import { Button } from "@/src/shared";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { TIngredient } from "@/src/types/types";

type IngridientUIProps = Pick<TIngredient, 'image' | 'price' | 'name'>

export const IngridientUI: FC<IngridientUIProps> = ({image, price, name}) => {
  return (
    <li>
      <Link href='#'>
        <Image src={image} alt='' width={100} height={100} />
        <p>{price}</p>
        <p>{name}</p>
      </Link>
      <Button>Добавить</Button>
    </li>
  )
}