import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <section className="flex justify-between min-w-full sm:w-full sm:px-80 sm:py-7 p-5 items-center">
      <Image
        src="/images/tally-count.png"
        alt="Tally Count"
        width={180}
        height={180}
        priority
      />

      <div>
        <ul className="sm:flex text-sm sm:gap-2 sm:items-center text-white font-semibold hidden">
          <li className="bg-customDarkGray px-3 py-1 rounded-2xl text-customGreen">
            Counters
          </li>
          <li className="hover:text-customGreen hover:bg-customDarkGray px-3 py-1 rounded-2xl">
            Solo
          </li>
          <li className="hover:text-customGreen hover:bg-customDarkGray px-3 py-1 rounded-2xl">
            Pro
          </li>
          <li className="hover:text-customGreen hover:bg-customDarkGray px-3 py-1 rounded-2xl">
            Login
          </li>
          <li className="hover:text-customGreen hover:bg-customDarkGray px-3 py-1 rounded-2xl">
            Register
          </li>
          <li className="hover:text-customGreen hover:bg-customDarkGray px-3 py-1 rounded-2xl">
            Contact
          </li>
        </ul>
      </div>

      <div className="sm:hidden">
        <Bars3Icon className="size-7 text-white" />
      </div>
    </section>
  );
}
