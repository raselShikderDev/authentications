
export default function Login() {
  return (
    <div className="flex min-h-svh w-full items-center  justify-center p-6 md:p-10">
      <div className="w-full max-w-sm bg-red">
        <form className="" method="get">
          <h1 className="text-center text-4xl font-bold">Login</h1>
          <div className="mt-10 space-y-2">
            <div>
              <input
                type="email"
                placeholder="Email Addess"
                className="border-black/20 w-full border-[1px] px-2 py-0.5 shadow-md rounded"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="border-black/20 w-full border-[1px] px-2 py-0.5 shadow-md rounded"
              />
            </div>
            <div className=" text-center">
              <button
                type="submit"
                className="bg-gray-800 text-white px-4 py-1 hover:scale-105 rounded shadow-md"
              >
                Submit
              </button>
            </div>
            {/* <button onClick={() => signIn("github")}></button> */}
            {/* <button className="hover:pointer-events-auto" onClick={() => signin()}>
              Sign in with GitHub
            </button> */}
          </div>
        </form>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
