import Image from 'next/image';
import { FC } from 'react';

interface ConstructorElementUIProps {
  text: string;
  price: number;
  thumbnail: string;
}

export const ConstructorElementUI: FC<ConstructorElementUIProps> = ({
  text,
  price,
  thumbnail
}) => {
  console.log(thumbnail);

  return (
    <div className='relative'>
      <Image
        // className='w-full h-full'
        src={thumbnail}
        alt=''
        width={500}
        height={500}
      />
      <p className='text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        {text} | {price}
      </p>
    </div>
  );
};
