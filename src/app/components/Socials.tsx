'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import facebook from '../../../public/facebook.svg';
import instagram from '../../../public/instagram.svg';
import github from '../../../public/github.svg';
import twitter from '../../../public/twitter.svg';
import { motion } from 'framer-motion';

const Socials = () => {
  const socials = [
    {
      url: '/facebook',
      icon: facebook,
      alt: 'Facebook',
    },
    {
      url: '/instagram',
      icon: instagram,
      alt: 'Instagram',
    },
    {
      url: '/github',
      icon: github,
      alt: 'GitHub',
    },
    {
      url: '/twitter',
      icon: twitter,
      alt: 'Twitter',
    },
  ];

  const iconsVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={iconsVariants}
      initial="initial"
      animate="animate"
      className="absolute bottom-0 left-8 flex flex-col items-center gap-y-3">
      {socials.map((social) => (
        <motion.div variants={iconsVariants} key={social.alt}>
          <Link href={social.url}>
            <Image src={social.icon} alt={social.alt} />
          </Link>
        </motion.div>
      ))}
      <motion.span
        initial={{ width: '2px', height: 0 }}
        animate={{ height: 128 }}
        transition={{ duration: 1, delay: 0.5 }}
        className=" bg-black"
      />
    </motion.div>
  );
};

export default Socials;
