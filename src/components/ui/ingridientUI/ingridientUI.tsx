// 'use client'; будет клиентским, чтобы обработать кнопку добавить

import { Button } from '@/src/shared';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { TIngredient } from '@/src/types/types';

type IngridientUIProps = Pick<TIngredient, 'image' | 'price' | 'name'> & {
  id: string;
};

export const IngridientUI: FC<IngridientUIProps> = ({
  image,
  price,
  name,
  id
}) => {
  return (
    <li className='flex flex-col gap-2 items-center justify-between'>
      <Link href='/' className='flex flex-col items-center gap-2'>
        <Image
          className='w-auto h-auto'
          src={image}
          alt=''
          width={100}
          height={100}
        />
        <p>{price}</p>
        <p className='text-center'>{name}</p>
      </Link>
      <Button data-id={id} variant='outline' className='w-1/2'>
        Добавить
      </Button>
    </li>
  );
};
