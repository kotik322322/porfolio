import Image from "next/image";
import React from "react";
import svgLogo from "../../../public/kostDev.svg";
import Link from "next/link";

interface LogoProps {
  active: boolean;
}

const Logo = ({ active }: LogoProps) => {
  return (
    <Link
        href={"/"}
        className={`absolute top-10 text-xl left-20  font-bold ${
          active && "text-white  z-50 shadow-text"
        }`}
      >
        KostiantynDev
      </Link>
  );
};

export default Logo;
