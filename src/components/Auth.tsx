import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions = {
 providers: [
  GoogleProvider({
   clientId: process.env.GOOGLE_ID || '',
   clientSecret: process.env.GOOGLE_SECRET || '',
  }),
 ],
 session: {
  strategy: 'jwt',
 },
} as AuthOptions;

const Auth = NextAuth(authOptions);

export default Auth(authOptions);