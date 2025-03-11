import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <div>
      <form>
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      </form>
    </div>
  );
}
