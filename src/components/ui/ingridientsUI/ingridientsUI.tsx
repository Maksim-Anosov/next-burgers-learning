import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/shared';
import { IngridientUI } from '../ingridientUI';
import { TIngredient } from '@/src/types/types';
import { FC } from 'react';

interface IngridientsUIProps {
  buns: TIngredient[];
  sauces: TIngredient[];
  mains: TIngredient[];
}

export const IngridientsUI: FC<IngridientsUIProps> = ({buns, sauces, mains}) => {
  return (
    <Tabs defaultValue='bun' className='w-full'>
      <TabsList>
        <TabsTrigger value='bun'>Булки</TabsTrigger>
        <TabsTrigger value='main'>Главное</TabsTrigger>
        <TabsTrigger value='sauce'>Соусы</TabsTrigger>
      </TabsList>
      <TabsContent value='bun'>
        <ul className='grid grid-cols-3 gap-4'>
          {buns.map((bun) => (
            <IngridientUI
              key={bun._id}
              image={bun.image}
              price={bun.price}
              name={bun.name}
            />
          ))}
        </ul>
      </TabsContent>
      <TabsContent value='main'>
        <ul className='grid grid-cols-3 gap-4'>
          {mains.map((main) => (
            <IngridientUI
              key={main._id}
              image={main.image}
              price={main.price}
              name={main.name}
            />
          ))}
        </ul>
      </TabsContent>
      <TabsContent value='sauce'>
        <ul className='grid grid-cols-3 gap-4'>
          {sauces.map((sauce) => (
            <IngridientUI
              key={sauce._id}
              image={sauce.image}
              price={sauce.price}
              name={sauce.name}
            />
          ))}
        </ul>
      </TabsContent>
    </Tabs>
  );
}
