import { BurgerConstructor, Ingridients } from '@/src/components';
import { IngridientsFallback } from '@/src/components/ui';
import { Suspense } from 'react';
export default function Constructor() {
  return (
    <Suspense fallback={<IngridientsFallback />}>
    <section className='flex h-full'>
      <div className='w-1/2 h-full p-4'>
          <Ingridients />
      </div>
      <div className='w-1/2 p-4'>
        <BurgerConstructor />
      </div>
    </section>
    </Suspense>
  );
}
