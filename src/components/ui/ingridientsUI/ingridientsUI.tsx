import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/shared';
import { TIngredient } from '@/src/types/types';
import { FC } from 'react';
import { IngridientsListUI } from '../ingridientsListUI';

interface IngridientsUIProps {
  buns: TIngredient[];
  sauces: TIngredient[];
  mains: TIngredient[];
}

export const IngridientsUI: FC<IngridientsUIProps> = ({
  buns,
  sauces,
  mains
}) => {
  return (
    <Tabs defaultValue='bun' className='w-full'>
      <TabsList>
        <TabsTrigger value='bun'>Булки</TabsTrigger>
        <TabsTrigger value='main'>Главное</TabsTrigger>
        <TabsTrigger value='sauce'>Соусы</TabsTrigger>
      </TabsList>
      <TabsContent value='bun'>
        <IngridientsListUI ingridients={buns} />
      </TabsContent>
      <TabsContent value='main'>
        <IngridientsListUI ingridients={mains} />
      </TabsContent>
      <TabsContent value='sauce'>
        <IngridientsListUI ingridients={sauces} />
      </TabsContent>
    </Tabs>
  );
};
