"use client";
import Animation from "./components/Animation";
import Link from "next/link";
import Logo from "./components/Logo";
import { useState } from "react";
import Promo from "./components/Promo";
import Socials from "./components/Socials";

export default function Home() {
  const [active, setActive] = useState<boolean>(false);
  const activeHandler = () => setActive(!active);
  return (
    <main className="w-full h-auto p-8 flex-1 relative">
      <Logo active={active} />

      <Link
        className={`absolute top-1/4 left-3 -rotate-90 hover:scale-110 transition duration-100 font-bold text-xl z-50  ${
          active && "text-white shadow-text"
        }`}
        href={"/work"}
      >
        Work
      </Link>
      <Link
        className={`absolute top-1/4 right-3 rotate-90 hover:scale-110 transition duration-100 font-bold text-xl z-50  ${
          active && "text-white shadow-text"
        }`}
        href={"/about"}
      >
        About
      </Link>
      <Link
        className={`absolute top-2/4 left-3 -rotate-90 hover:scale-110 transition duration-100 font-bold text-xl z-50   ${
          active && "text-white shadow-text"
        }`}
        href={"/skills"}
      >
        Skills
      </Link>
      <Link
        className={`absolute top-2/4 right-3 rotate-90 hover:scale-110 transition duration-100 font-bold text-xl z-50  ${
          active && "text-white shadow-text"
        }`}
        href={"/contact"}
      >
        Contact
      </Link>

      <Socials />

      <Animation active={active} onClick={activeHandler} />
      <Promo active={active} />
    </main>
  );
}
