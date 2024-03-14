"use client";
import Animation from "./components/Animation";
import Link from "next/link";
import Logo from "./components/Logo";
import { useState } from "react";
import Promo from "./components/Promo";


export default function Home() {
  const [active, setActive] = useState<boolean>(false);
  const activeHandler = () => setActive(!active);
  return (
    <main className="w-full h-full flex-1 p-8 relative">
      <Logo />
      <Link className="absolute top-1/2 left-5 -rotate-90" href={"/work"}>
        Work
      </Link>
      <Link className="absolute top-1/2 right-5 rotate-90" href={"/about"}>
        About
      </Link>
      <Link className="absolute bottom-5 left-1/4" href={"/skills"}>
        Skills
      </Link>
      <Link className="absolute bottom-5 right-1/4" href={"/contact"}>
        Contact
      </Link>



      <Animation active={active} onClick={activeHandler} />
      <Promo active={active} />
    </main>
  );
}

// w-[100vw] h-[50vh]
