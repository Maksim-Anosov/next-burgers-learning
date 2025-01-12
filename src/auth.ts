import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { AuthorizeService } from './services/authorizeService';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        const user = await AuthorizeService.loginUser({
          email: credentials.email as string,
          password: credentials.password as string
        });

        if(user.success) {
          return user;
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
        token.user = user.user;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.user = token.user;
      return session;
    },
    async authorized({ auth }) {
      return !!auth
    }
  },
  pages: {
    signIn: '/signin'
  },
  trustHost: true
});
