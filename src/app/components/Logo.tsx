import Image from "next/image";
import React from "react";
import svgLogo from "../../../public/kostDev.svg";

interface LogoProps {
  active: boolean;
}

const Logo = ({ active }: LogoProps) => {
  return (
    <h1 className={`${active && "shadow-text text-white block z-50"}  `}>
      KostiantynDev
    </h1>
  );
};

export default Logo;
