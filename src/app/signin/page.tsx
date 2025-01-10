'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/src/shared/ui-kit/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/src/shared/ui-kit/form';
import { Input } from '@/src/shared/ui-kit/input';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const formSchema = z.object({
  email: z.string().includes('@', {
    message: 'Email is required.'
  }),
  password: z
    .string()
    .min(2, {
      message: 'Password must be at least 2 characters.'
    })
    .max(50, {
      message: 'Password must be less than 50 characters.'
    })
});

export default function Signin() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: '/'
    });
  }
  
  return (
    <Form {...form}>
      <form
      onSubmit={form.handleSubmit(onSubmit)} 
      className='space-y-8 max-w-[50vw] mx-auto mt-[20vh] flex flex-col justify-center items-center'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='w-1/2'>
              <FormControl>
                <Input placeholder='почта' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='w-1/2'>
              <FormControl>
                <Input placeholder='пароль' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-1/4' variant={'outline'} type='submit'>
          Войти
        </Button>
        <Link className='transition hover:text-primary' href={'/signup'}>Зарегестрироваться</Link>
        <Link className='transition hover:text-primary' href={'/forgot'}>Забыли пароль?</Link>
      </form>
    </Form>
  );
}
