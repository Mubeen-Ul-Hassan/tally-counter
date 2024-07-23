import CardButton from "@/components/CardButton";

export default function Page() {
  return (
    <section>
      <div className="w-full flex flex-col justify-center items-center text-white">
        <h1 className="sm:text-6xl text-4xl w-4/5 font-extrabold sm:w-2/5 text-center mt-40 sm:mt-20">
          A professional solution you can{" "}
          <span className="text-customGreen">count on</span>
        </h1>
        <p className="text-base sm:text-xl w-11/12 sm:w-2/4 text-center mt-5">
          All jokes aside, Tally Count offers{" "}
          <span className="font-extrabold">reliability</span> where other
          counting solutions {"don't"} stack up. We offer features that other
          apps and websites simply {"don't"} have.
        </p>
        <CardButton buttonContent={"Sign Up Now"} />
      </div>
    </section>
  );
}
