import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const { auth, handlers } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_IDGITHUB_SECRET!,
    }),
  ],
  debug:true,
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub as string;
      return session;
    },
  },
});
