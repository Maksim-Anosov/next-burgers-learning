import { cn } from '@/src/shared';
import Image from 'next/image';
import React, { FC } from 'react';

interface ConstructorElementUIProps {
  text: string;
  img: string;
  className?: string;
  zIndex?: number;
}

export const ConstructorElementUI: FC<ConstructorElementUIProps> = ({
  text,
  img,
  className,
  zIndex
}) => {
  return (
    <div
      style={{ zIndex }}
      className={cn(
        'relative w-[300px] h-[30px] flex justify-center items-center',
        className
      )}
    >
      <Image
        className='w-auto h-auto'
        src={img}
        alt={text}
        width={200}
        height={100}
      />
    </div>
  );
};