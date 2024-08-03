"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

interface linksGuard {
  name: string;
  href: string;
}

const links: linksGuard[] = [
  { name: "Counters", href: "/" },
  { name: "Solo", href: "/solo" },
  { name: "Pro", href: "/pro" },
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  let [open, setOpen] = useState<boolean>(false);
  const path = usePathname();

  const listItems = links.map((link, key) => {
    return (
      <li
        key={key}
        className={` ${
          path == link.href ? "sm:text-customGreen sm:bg-customDarkGray" : ""
        }   sm:bg-transparent sm:rounded-2xl sm:px-4 sm:py-1.5 sm:mx-0 sm:duration-200 mx-4 my-2 bg-customLigthGreen px-3 py-1 rounded-md`}
        onClick={() => {
          setOpen(false);
        }}
      >
        <Link href={link.href}>{link.name}</Link>
      </li>
    );
  });

  return (
    <section className="">
      <div className="flex justify-between items-center mx-4 my-4 sm:mx-80 sm:my-6">
        <Image
          src="/images/tally-count.png"
          alt="Tally Count"
          width={180}
          height={180}
          priority
        />

        <div
          className="absolute right-4 top-5 sm:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? (
            <XMarkIcon className="size-6 text-white" />
          ) : (
            <Bars3Icon className="size-6 text-white" />
          )}
        </div>

        <div
          className={`absolute sm:relative left-0 top-16 sm:top-0 w-full sm:w-fit ${
            open ? "top-16" : "top-[-400px]"
          }`}
        >
          <ul className="bg-customGreen sm:bg-transparent sm:fit-content sm:flex sm:gap-2 text-white sm:text-sm text-base font-extrabold py-2 sm:py-0">
            {listItems}
          </ul>
        </div>
      </div>
    </section>
  );
}
