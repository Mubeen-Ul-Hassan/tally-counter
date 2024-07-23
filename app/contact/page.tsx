import CardButton from "@/components/CardButton";

export default function Page() {
  return (
    <section>
      <div className="flex justify-center items-center w-full mt-10 sm:mt-5">
        <div className="w-full sm:w-[28%] bg-customDarkGray sm:rounded-xl p-8">
          <h1 className="text-3xl font-extrabold text-customGreen pb-8">
            Contact Me
          </h1>

          <p className="text-gray-400 pb-8">
            Have a question or suggestion about the tool? I would love to hear
            from you. Name
          </p>

          <form
            action=""
            className="*:w-full *:bg-customInputGray *:p-2 *:rounded-md *:mb-6 *:text-base *:text-white"
          >
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="E-Mail Address" />
            <textarea
              name="Message"
              id=""
              placeholder="Message"
              rows={5}
            ></textarea>
          </form>

          <CardButton buttonContent="Let's talk" />
        </div>
      </div>
    </section>
  );
}
