
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      redirect: false, // Prevents redirect and allows manual handling of errors
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      {session ? (
        <div>
          <p>Welcome, {session.user?.email}!</p>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Email or Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded"
            >
              Login Now
            </button>
          </form>
          <div className="mt-10 text-center">
            <button
              className="px-4 py-1.5 bg-gray-900 cursor-pointer text-white rounded"
              onClick={() => signIn("github")}
            >
              Sign in with Github
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
