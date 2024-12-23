import { Ingridients } from "@/src/modules";

export default function Constructor() {
  return (
    <section className='h-full w-full flex'>
      <div className='w-1/2 p-4'><Ingridients/></div>
      <div className='w-1/2 p-4'>Constructor</div>
    </section>
  );
}
