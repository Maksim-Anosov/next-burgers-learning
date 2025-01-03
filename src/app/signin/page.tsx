'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/src/shared/ui-kit/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/src/shared/ui-kit/form';
import { Input } from '@/src/shared/ui-kit/input';
import { signIn } from '@/auth';

const formSchema = z.object({
  email: z
    .string()
    .includes('@', {
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

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   signIn(values);
  // }

  return (
    <Form {...form}>
      <form className='space-y-8 max-w-[50vw] mx-auto my-8'>
      <FormField
        control={form.control}
        name='email'
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder='email' {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='password'
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder='password' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
