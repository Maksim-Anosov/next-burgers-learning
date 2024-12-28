import { ConstructorElementUI } from '../constructorElementUI';
import { TIngredient } from '@/src/types/types';
import { FC } from 'react';
import { TIngredientWithZIndex } from '../../store/orderStore';

interface BurgerConstructorUIProps {
  buns: TIngredient[];
  infrigients: TIngredientWithZIndex[];
}

export const BurgerConstructorUI: FC<BurgerConstructorUIProps> = ({
  buns,
  infrigients
}) => {
  return (
    <div className='flex flex-col w-1/2 p-20'>
      <ConstructorElementUI
        className='relative z-[100]'
        text={buns[0].name}
        img={buns[0].image_large}
      />
      <ul>
        {infrigients.map((ingridient, index) => {
          return (
            <ConstructorElementUI
              key={index}
              text={ingridient.name}
              img={ingridient.image_large}
              zIndex={ingridient.zIndex}
            />
          );
        })}
      </ul>
      <ConstructorElementUI
        className='relative z-[-100]'
        text={buns[0].name}
        img={buns[0].image_large}
      />
      {/* {buns?.length ? (
        <ConstructorElementUI text={buns[0].name} img={buns[0].image_large} />
      ) : (
        <div>Выберете булочку</div>
      )}
      {infrigients?.length ? (
        <ul>
          {infrigients.map(ingridient => {
            return (
              <ConstructorElementUI
                key={ingridient._id}
                text={ingridient.name}
                img={ingridient.image_large}
              />
            );
          })}
        </ul>
      ) : (
        <div>Выберете начинку</div>
      )}
      {buns?.length ? (
        <ConstructorElementUI text={buns[0].name} img={buns[0].image_large} />
      ) : (
        <div>Выберете булочку</div>
      )} */}
    </div>
  );
};
