import CardButton from "@/components/CardButton";

export default function Page() {
  return (
    <section className="flex justify-center items-center mt-16">
      <div className="bg-customDarkGray w-[28%] rounded-xl p-8">
        <h1 className="text-customGreen font-extrabold text-3xl pb-8">Login</h1>

        <form action="" className="*:text-white">
          <input
            type="text"
            placeholder="E-Mail Address"
            className="bg-customInputGray p-2 rounded-md w-full mb-6 text-base"
          />
          <br />
          <input
            type="text"
            placeholder="Password"
            className="bg-customInputGray p-2 rounded-md w-full mb-6 text-base"
          />

          <div className="flex items-center justify-between text-base">
            <div className="flex items-center gap-2 text-gray-400">
              <input
                type="checkbox"
                className="size-4 rounded-xl"
                id="checkBox"
              />
              <label htmlFor="checkBox">Remember Me</label>
            </div>
            <p className="text-customGreen hover:text-customLigthGreen hover:underline hover:underline-offset-4 pointer">
              Forgot Your Password?
            </p>
          </div>
        </form>

        <CardButton buttonContent="Login" />

        <div className="text-gray-400 text-center mt-5 text-sm">
          <p>
            {"Don't"} have an account?{" "}
            <span className="text-customGreen">Register</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// Chatgpt: By which tag can be used as wrapper.
