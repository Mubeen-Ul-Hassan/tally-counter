"use client";
import React, { useState } from "react";
import Screen from "@/components/Screen";
import Button from "@/components/Button";

const Page = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Screen count={count} />
      <Button setCount={setCount} count={count} />
      <div className="flex justify-center ">
        <p className="text-white text-base w-10/12 sm:w-6/12 text-center pt-10">
          Your counter tally is saved to your browser (on your device)
          automatically. If you clear your cache it will be lost. If you would
          like it synced to the cloud you should create a free account.
        </p>
      </div>
    </div>
  );
};

export default Page;
