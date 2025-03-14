"use client";
import Loader from "@/components/loader";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      redirect: false, // Prevents redirect and allows manual handling of errors
    });
  };
  useEffect(()=>{
    if (session) {
      setIsLoading(true)
      router.push("/dashboard");
    }
  },[session, router, isLoading])
  
if (isLoading) {
  return <Loader/>
}
  return (
    <main className="flex min-h-screen items-center justify-center">
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
            className="px-4 py-2 hover:bg-blue-600 active:scale-105 bg-blue-500 cursor-pointer text-white rounded"
          >
            Login Now
          </button>
        </form>
        <div className="mt-10 text-center">
          <button
            className="px-4 py-1.5 hover:bg-gray-800 active:scale-105 bg-gray-900 cursor-pointer text-white rounded"
            onClick={() => signIn("github")}
          >
            Sign in with Github
          </button>
        </div>
      </div>
    </main>
  );
}
