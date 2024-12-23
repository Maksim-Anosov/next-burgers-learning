'use client';

import { Ingridients } from "@/src/modules";
import { queryClient } from "@/src/shared/api/query-client";
import { QueryClientProvider } from "@tanstack/react-query";

export default function Constructor() {
  return (
    <QueryClientProvider client={queryClient}>
    <section className='h-full w-full flex'>
      <div className='w-1/2 p-4'><Ingridients/></div>
      <div className='w-1/2 p-4'>Constructor</div>
    </section>
    </QueryClientProvider>
  );
}
