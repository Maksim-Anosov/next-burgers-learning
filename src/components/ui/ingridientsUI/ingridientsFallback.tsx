import { Skeleton } from '@/src/shared';

export function IngridientsFallback() {
  return (
    <div className='w-1/2 h-full'>
      <Skeleton className='w-1/4 h-10 mb-4' />
      <div className='w-full h-full grid grid-cols-3 gap-4'>
        <div className='flex flex-col gap-2 w-full h-full items-center'>
          <Skeleton className='w-2/3 h-40' />
          <Skeleton className='w-1/2 h-10' />
        </div>
        <div className='flex flex-col gap-2 w-full h-full items-center'>
          <Skeleton className='w-2/3 h-40' />
          <Skeleton className='w-1/2 h-10' />
        </div>
        <div className='flex flex-col gap-2 w-full h-full items-center'>
          <Skeleton className='w-2/3 h-40' />
          <Skeleton className='w-1/2 h-10' />
        </div>
        <div className='flex flex-col gap-2 w-full h-full items-center'>
          <Skeleton className='w-2/3 h-40' />
          <Skeleton className='w-1/2 h-10' />
        </div>
        <div className='flex flex-col gap-2 w-full h-full items-center'>
          <Skeleton className='w-2/3 h-40' />
          <Skeleton className='w-1/2 h-10' />
        </div>
        <div className='flex flex-col gap-2 w-full h-full items-center'>
          <Skeleton className='w-2/3 h-40' />
          <Skeleton className='w-1/2 h-10' />
        </div>
      </div>
    </div>
  );
}
