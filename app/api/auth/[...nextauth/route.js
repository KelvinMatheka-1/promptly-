import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  PROVIDERS: [

    GoogleProvider({
      clientId: '',
      clientSecret: ''
    })
  ],
  async session ({ session }){

  },
  async signIn({ profile }){
    
  }
})