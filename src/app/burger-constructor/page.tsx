import { Ingridients } from '@/src/components';

export default async function Constructor() {
  return (
    <section className='flex'>
      <div className='w-1/2 p-4'>
        <Ingridients />
      </div>
      <div className='w-1/2 p-4'>Constructor</div>
    </section>
  );
}
