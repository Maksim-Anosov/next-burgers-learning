import Link from 'next/link';
import { ListChecks, SquareMenu, UserCheck, UserPlus } from 'lucide-react';
import { cn } from '@/src/shared/lib/utils';
import Image from 'next/image';
import Burger from '/public/assets/burger.png';
import { Container } from '@/src/shared';
import { FC } from 'react';

interface HeaderUIProps {
  className?: string;
  user: boolean;
  path: string;
}

export const HeaderUI: FC<HeaderUIProps> = ({ className, user, path }) => {
  return (
    <header className={cn('shadow-2xl', className)}>
      <Container className='flex justify-between items-center p-4'>
        <div className='flex flex-col gap-4'>
          <Link
            className={cn(
              'flex items-center gap-1 hover:scale-105 transition hover:text-primary',
              path === '/burger-constructor' && 'text-primary scale-105'
            )}
            href='/burger-constructor'
          >
            <SquareMenu />
            <span>Собрать бургер</span>
          </Link>
          <Link
            className={cn(
              'flex items-center gap-1 hover:scale-105 transition hover:text-primary',
              path === '/feed' && 'text-primary scale-105'
            )}
            href='/feed'
          >
            <ListChecks />
            <span>Лента заказов</span>
          </Link>
        </div>
        <div>
          <Link
            className={cn(
              'flex items-center gap-1 hover:scale-105 transition hover:text-primary text-3xl',
              path === '/' && 'text-primary scale-105'
            )}
            href='/'
          >
            <span>Space</span>
            <Image
              src={Burger}
              alt='burger-icon'
              width={80}
              className='w-auto h-auto'
              priority
            />
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
