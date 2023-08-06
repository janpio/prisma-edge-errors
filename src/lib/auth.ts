import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { type NextAuthConfig } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { db } from "@/lib/db";

export const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(db),
  session: { strategy: "database" }, // switch the strategy to "jwt" to avoid RSC throwing 500s
  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.AUTH_SECRET,
  },
  providers: [GithubProvider],
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });
      console.log({ dbUser })

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        image: dbUser.image,
      };
    },
    redirect() {
      return "/";
    },
    authorized({ auth }) {
      return !!auth?.user; // this ensures there is a logged in user for -every- request
    },
  },
};

export const {
  handlers: { GET, POST },
  auth,
  // CSRF_experimental, // will be removed in future
} = NextAuth(authOptions);
