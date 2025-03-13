import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "./data/users";
export const { auth, handlers } = NextAuth({
  providers: [
    // Github Athen
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // Credential athentication
    CredentialsProvider({
      credentials: {
        email: {
          label: "text",
          type: "text",
          placeholder: "Email or Username",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        console.log("Finding User");

        const user = users.find(
          (user) =>
            (user.email === credentials.email &&
              user.password === credentials.password) ||
            (user.username === credentials.email &&
              user.password === credentials.password)
        );
        if (!user) {
          console.log(" User not Found");
          return null;
        }
        console.log(" User Found");
        return {
          id: user?.id.toLocaleString(),
          email: user?.email,
          username: user?.username,
        };
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub as string;
      session.user.email = token.email as string;
      return session;
    },
  },
});
