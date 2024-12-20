import Link from 'next/link';
import { ListChecks, SquareMenu, UserCheck, UserPlus } from 'lucide-react';
import { cn } from '@/src/shared/lib/utils';
import { Container } from '../container';
import Image from 'next/image';
import Burger from '@/src/assets/burger.png'
interface Props {
  className?: string;
  user: boolean;
}

export const HeaderUI: React.FC<Props> = ({ className, user }) => {
  return (
    <header className={cn('shadow-2xl', className)}>
      <Container className='flex justify-between items-center p-4'>
        <div className='flex items-center gap-4'>
          <Link
            className='flex items-center gap-1 hover:scale-105 transition'
            href='/'
          >
            <SquareMenu />
            <span>Конструктор</span>
          </Link>
          <Link
            className='flex items-center gap-1 hover:scale-105 transition'
            href='/'
          >
            <ListChecks />
            <span>Лента заказов</span>
          </Link>
        </div>

        <Link className='hover:scale-105 transition ' href='/'>
          {/* <BurgerIcon /> */}
          <Image
            src={Burger}
            alt='burger-icon'
            width={100}
          />
        </Link>

        <div>
          <Link
            className='flex items-center gap-1 hover:scale-105 transition'
            href='/'
          >
            {user ? <UserCheck /> : <UserPlus />}
            <span className=''>Личный кабинет</span>
          </Link>
        </div>
      </Container>
    </header>
  );
};
