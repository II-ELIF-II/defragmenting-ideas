
import { prisma } from "@/app/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {label:"Email", type: "email"},
        password: {label:"Password", type:"password"},
      },
      async authorize(credentials) {
        const {email, password} = credentials;

        //Check if required data is even there
        if (!email || !password || email === "" || password === "") {
          return null;
        }

        //Try to get the user
        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        
        //Check if user exists
        if (!user)
          return null;
        // console.log("user exists");
        
        //Check if passwords are correct
        if (password !== user.password)
          return null;
        // console.log("password verified")
        // console.log(user)

        //Return user if everything is correct
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async jwt({token, user, session, trigger}){
      //console.log("JWT: \n", {token, user, session});

      if(trigger === "update" && session?.name) {
        token.name = session.name;
      }

      //Pass-on from User {userID, isAdmin} to token
      if (user) {
        return {
          id: user.id,
          ...token,
          isAdmin: user.isAdmin,
        }
      }
      return token;
    },
    async session({session, token, user}) {
      //console.log("Session: \n", {session, token, user});

      //Pass-on from Token {userID, isAdmin} to session
      return {
        ...session,
        user: {
          id: token.id,
          ...session.user,
          isAdmin: token.isAdmin,
        }
      }
    },
  },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};