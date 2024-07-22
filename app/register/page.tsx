import CardButton from "@/components/CardButton";

export default function Page() {
  return (
    <section>
      <div className="flex justify-center items-center w-full mt-16">
        <div className="w-[28%] bg-customDarkGray rounded-xl p-8">
          <h1 className="text-3xl font-extrabold text-customGreen pb-8">
            Create Account
          </h1>

          <form
            action=""
            className="*:w-full *:bg-customInputGray *:p-2 *:rounded-md *:mb-6 *:text-base *:text-white"
          >
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="E-Mail Address" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm Password" />
          </form>

          <CardButton buttonContent="Create Account" />

          <div className="text-gray-400 text-center mt-5 text-sm">
            <p>
              Already have an account?{" "}
              <span className="text-customGreen">Login</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
