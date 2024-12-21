import Link from 'next/link';
import { ListChecks, SquareMenu, UserCheck, UserPlus } from 'lucide-react';
import { cn } from '@/src/shared/lib/utils';
import Image from 'next/image';
import Burger from '@/src/assets/burger.png';
import { Container } from '@/src/shared';
import { FC } from 'react';

interface HeaderUIProps {
  className?: string;
  user: boolean;
}

export const HeaderUI: FC<HeaderUIProps> = ({ className, user }) => {
  return (
    <header className={cn('shadow-2xl', className)}>
      <Container className='flex justify-between items-center p-4'>
        <div className='flex flex-col gap-4'>
          <Link
            className='flex items-center gap-1 hover:scale-105 hover:text-primary transition'
            href='/'
          >
            <SquareMenu />
            <span>Собрать бургер</span>
          </Link>
          <Link
            className='flex items-center gap-1 hover:scale-105 transition hover:text-primary'
            href='/'
          >
            <ListChecks />
            <span>Лента заказов</span>
          </Link>
        </div>
        <div>
          <Link
            className='hover:scale-105 transition flex items-center gap-2 text-2xl hover:text-primary'
            href='/'
          >
            <span>Space</span>
            <Image src={Burger} alt='burger-icon' width={100} />
            <span>Burger</span>
          </Link>
        </div>
        <div>
          <Link
            className='flex gap-1 justify-center hover:scale-105 transition hover:text-primary min-w-[200px]'
            href='/'
          >
            {user ? <UserCheck /> : <UserPlus />}
            <span>{user ? 'Личный кабинет' : 'Войти'}</span>
          </Link>
        </div>
      </Container>
    </header>
  );
};
