// 'use client'; будет клиентским, чтобы обработать кнопку добавить

import { Button } from '@/src/shared';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { TIngredient } from '@/src/types/types';

type IngridientUIProps = Pick<TIngredient, 'image' | 'price' | 'name'> & {
  onClick: () => void;
};

export const IngridientUI: FC<IngridientUIProps> = ({
  image,
  price,
  name,
  onClick,
}) => {
  return (
    <li className='flex flex-col gap-2 items-center justify-between'>
      <Link href='/' className='flex flex-col items-center gap-2'>
        <Image src={image} alt='' width={200} height={200} />
        <p>{price}</p>
        <p className='text-center'>{name}</p>
      </Link>
      <Button onClick={onClick} variant='outline' className='w-1/2'>
        Добавить
      </Button>
    </li>
  );
};
