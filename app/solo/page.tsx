import { CheckCircleIcon } from "@heroicons/react/24/solid";
import CardButton from "@/components/CardButton";

export default function Page() {
  return (
    <div>
      <section className=" flex justify-center mt-14">
        <div className="bg-customDarkGray w-[28%] rounded-xl p-8">
          <h1 className="text-customGreen text-4xl font-extrabold py-4">
            Purchase Solo Plan
          </h1>
          <p className="text-white text-lg">
            For individual power users who need more from Tally Count. Enhance
            your efficiency and productivity with these Solo Plan features.
          </p>

          <div className="flex justify-between items-center py-4">
            <h1 className="text-white text-sm font-extrabold">
              {"WHAT'S INCLUDED"}
            </h1>
            <hr className="w-8/12 opacity-15" />
          </div>

          <ul className="text-sm">
            <li className="flex items-center gap-4 text-white py-2">
              <CheckCircleIcon className="size-6 text-customGreen" />{" "}
              <p>Remove the 9 counter limit and create additional counters!</p>
            </li>
            <li className="flex items-center gap-4 text-white py-2">
              <CheckCircleIcon className="size-6 text-customGreen" />{" "}
              <p>
                Set categories to group counters together and filter them down
                quickly.
              </p>
            </li>
            <li className="flex items-center gap-4 text-white py-2">
              <CheckCircleIcon className="size-6 text-customGreen" />{" "}
              <p>
                Archive counters to declutter your screen and recall them later.
              </p>
            </li>
            <li className="flex items-center gap-4 text-white py-2">
              <CheckCircleIcon className="size-6 text-customGreen" />{" "}
              <p>Remove ads</p>
            </li>
          </ul>

          <CardButton buttonContent={"Register And Purchase"} />
        </div>
      </section>
    </div>
  );
}
