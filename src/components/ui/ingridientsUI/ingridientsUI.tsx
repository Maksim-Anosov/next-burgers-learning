import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/shared';
import { TIngredient } from '@/src/types/types';
import { FC } from 'react';
import { IngridientsListUI } from '../ingridientsListUI';

interface IngridientsUIProps {
  buns: TIngredient[];
  sauces: TIngredient[];
  mains: TIngredient[];
  addIngridient: () => void
}

export const IngridientsUI: FC<IngridientsUIProps> = ({
  buns,
  sauces,
  mains,
  addIngridient
}) => {
  return (
    <Tabs defaultValue='bun' className='w-full'>
      <TabsList>
        <TabsTrigger value='bun'>Булки</TabsTrigger>
        <TabsTrigger value='main'>Главное</TabsTrigger>
        <TabsTrigger value='sauce'>Соусы</TabsTrigger>
      </TabsList>
      <TabsContent value='bun'>
        <IngridientsListUI ingridients={buns} addIngridient={addIngridient} />
      </TabsContent>
      <TabsContent value='main'>
        <IngridientsListUI ingridients={mains} addIngridient={addIngridient} />
      </TabsContent>
      <TabsContent value='sauce'>
        <IngridientsListUI ingridients={sauces} addIngridient={addIngridient} />
      </TabsContent>
    </Tabs>
  );
};
