import { Ingridients } from '@/src/components';
import { BurgerConstructorUI } from '@/src/components/ui/burgerConstructorUI/burgerConstructorUI';

export default function Constructor() {
  return (
    <section className='flex'>
      <div className='w-1/2 p-4'>
        <Ingridients />
      </div>
      <div className='w-1/2 p-4'>
        <BurgerConstructorUI />
      </div>
    </section>
  );
}
