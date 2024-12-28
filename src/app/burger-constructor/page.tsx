import { BurgerConstructor, Ingridients } from '@/src/components';
export default function Constructor() {
  return (
    <section className='flex'>
      <div className='w-1/2 p-4'>
        <Ingridients />
      </div>
      <div className='w-1/2 p-4'>
        <BurgerConstructor />
      </div>
    </section>
  );
}
