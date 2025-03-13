"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen items-center justify-center">
      {session ? (
        <div>
          <p>Welcome, {session.user?.name}!</p>
          <button onClick={() => signOut()} className="px-4 py-2 bg-red-500 text-white rounded">
            Sign Out
          </button>
        </div>
      ) : (
        <button onClick={() => signIn("github")} className="px-4 py-2 bg-blue-500 text-white rounded">
          Sign in with GitHub
        </button>
      )}
    </main>
  );
}
