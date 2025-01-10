'use client';

import { usePathname } from 'next/navigation';
import { HeaderUI } from '../ui';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { setCookie } from '@/src/shared';

export function Header() {
  const path = usePathname();
  const { data } = useSession();
  
  useEffect(() => {
    if(data) {
      setCookie('accessToken', data.accessToken!);
      localStorage.setItem('refreshToken', data.refreshToken!);
    }
  }, [data])
  
  return <HeaderUI path={path} user={!!data?.user} />;
}
