import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { AuthorizeService } from './src/services/authorizeService';
// import { setCookie } from './src/shared';

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
        const data = await AuthorizeService.loginUser({
          email: credentials.email as string,
          password: credentials.password as string
        });

        if (data.success) {
          return {
            email: data.user.email,
            name: data.user.name,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken
          }
        } else {
          return null;
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      session.refreshToken = token.refreshToken as string
      return session
    }
  }
});
