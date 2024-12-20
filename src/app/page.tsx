'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Container
} from '../shared';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { images } from '../assets/carouselImages';

export default function Home() {
  return (
    <Container className='my-10'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000
          })
        ]}
      >
        <CarouselContent className=' max-h-[70vh]'>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                className='w-full h-full rounded-2xl object-cover'
                src={image}
                alt=''
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
