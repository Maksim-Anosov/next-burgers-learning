'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  cn,
  Container
} from '@/src/shared';
import Autoplay from 'embla-carousel-autoplay';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface CarouselUIProps {
  className?: string;
  images: StaticImageData[];
  delay?: number;
}

export const CarouselUI: FC<CarouselUIProps> = ({ className, images, delay=3000 }) => {
  return (
    <Container className={cn('my-10', className)}>
      <Carousel
        plugins={[
          Autoplay({
            delay
          })
        ]}
      >
        <CarouselContent className='max-h-[70vh]'>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                className='w-full h-full rounded-2xl object-cover'
                src={image}
                alt=''
                width={800}
                height={500}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
}
