'use client';

import { usePathname } from 'next/navigation';
import { HeaderUI } from '../ui';

export function Header() {
  const path = usePathname();
  return <HeaderUI path={path} user={false} />;
}
