import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface NavLinksProps {
  active: boolean;
}

const NavLinks = ({ active }: NavLinksProps) => {
  const navLinks = [
    {
      url: '/work',
      name: 'Work',
      className: 'top-1/4 left-3 -rotate-90',
    },
    {
      url: '/about',
      name: 'About',
      className: 'top-1/4 right-3 rotate-90',
    },
    {
      url: '/skills',
      name: 'Skills',
      className: 'top-2/4 left-3 -rotate-90',
    },
    {
      url: '/contact',
      name: 'Contact',
      className: 'top-2/4 right-3 rotate-90',
    },
  ];
  return (
    <>
      {navLinks.map((link) => (
        <motion.div
        initial
            key={link.name}
            className={`absolute ${
              link.className
            } hover:scale-110 transition duration-100 font-bold text-xl z-50  ${
              active && 'text-white shadow-text'
            }`}
        >
          <Link
            href={link.url}>
            {link.name}
          </Link>
        </motion.div>
      ))}
    </>
  );
};

export default NavLinks;
