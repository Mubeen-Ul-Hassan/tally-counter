import { useState } from "react";

interface countGuard {
  count: number;
}

export default function Screen({ count }: countGuard) {
  return (
    <section className="flex justify-center items-center">
      <div className="bg-customDarkGray w-full sm:mx-80 sm:rounded-t-xl sm:py-12 mt-6 sm:mt-12 h-72 ms:h-96 flex flex-col justify-center items-center">
        <h1 className="font-semibold text-white">Unnamed Counter</h1>
        <ul className="text-white text-8xl sm:text-10xl font-semibold pt-5 sm:pt-0">
          <li className="text-customGreen">{count}</li>
        </ul>
      </div>
    </section>
  );
}
