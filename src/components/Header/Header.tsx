'use client';

import { usePathname } from 'next/navigation';
import { HeaderUI } from '../ui';
import { useSession } from 'next-auth/react';

export function Header() {
  const path = usePathname();
  const { data } = useSession();
  
  return <HeaderUI path={path} user={!!data?.user} />;
}
