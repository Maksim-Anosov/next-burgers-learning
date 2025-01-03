'use client';

import { queryClient } from '@/src/shared/api/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
      {children}
      </SessionProvider>
    </QueryClientProvider>
  );
};
