'use client';

import { useOrderStore } from '../store/orderStore';
import { BurgerConstructorUI } from '../ui';
import { useShallow } from 'zustand/react/shallow';

export function BurgerConstructor() {
  const [buns, ingridients] = useOrderStore(useShallow(state => [
    state.buns,
    state.ingridients
  ]));

  if(!buns.length && !ingridients.length) return <div>Собери бургер</div>

  return <BurgerConstructorUI buns={buns} infrigients={ingridients} />;
}
