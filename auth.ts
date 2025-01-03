import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { AuthorizeService } from './src/services/authorizeService';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        // username: {
        //   label: 'Username',
        //   type: 'text',
        //   placeholder: 'your-name',
        // },
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'your-mail@example.com',
          required: true
        },
        password: { label: 'Password', type: 'password', required: true }
      },
      async authorize(credentials) {
        const res = await AuthorizeService.loginUser({
          email: credentials.email as string,
          password: credentials.password as string
        });

        return res.user;
      }
    })
  ]
});
