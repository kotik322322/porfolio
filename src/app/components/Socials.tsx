import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebook from "../../../public/facebook.svg";
import instagram from "../../../public/instagram.svg";
import github from "../../../public/github.svg";

import twitter from "../../../public/twitter.svg";

const Socials = () => {
  const socials = [
    {
      url: "/facebook",
      icon: facebook,
      alt: "Facebook",
    },
    {
      url: "/instagram",
      icon: instagram,
      alt: "Instagramm",
    },
    {
      url: "/github",
      icon: github,
      alt: "GitHub",
    },
    {
      url: "/twitter",
      icon: twitter,
      alt: "Twitter",
    },
  ];
  return (
    <div className="absolute bottom-0 left-8 flex flex-col items-center gap-y-3">
      {socials.map((social) => (
        <Link href={social.url} key={social.alt}>
          <Image src={social.icon} alt={social.alt} />
        </Link>
      ))}
      <span className="w-[2px] h-[128px] bg-black" />
    </div>
  );
};

export default Socials;
