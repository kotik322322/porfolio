'use client';
import Animation from './components/Animation';
import Link from 'next/link';
import Logo from './components/Logo';
import { useState } from 'react';
import Promo from './components/Promo';
import Socials from './components/Socials';
import { motion } from 'framer-motion';

export default function Home() {
  const [active, setActive] = useState<boolean>(false);
  const activeHandler = () => setActive(!active);
  return (
    <main className="w-full h-auto p-8 flex-1 relative overflow-hidden">
      <Logo active={active} />

      <motion.div
        initial={{ rotate: -90, top: '25%', left: -50 }}
        animate={{
          top: '25%',
          left: '0px',
          transition: { duration: 1, delay: 0.5, type: 'spring' },
        }}
        whileHover={{ scale: 1.1 }}
        className={`absolute font-bold text-xl z-50 w-20 ${active && 'text-white shadow-text'}`}>
        <Link href={'/work'}>Work</Link>
      </motion.div>

      <motion.div
        initial={{ rotate: 90, top: '25%', right: -50 }}
        animate={{
          top: '25%',
          right: '0px',

          transition: { duration: 1, delay: 0.5, type: 'spring' },
        }}
        whileHover={{ scale: 1.1 }}
        className={`absolute font-bold text-xl z-50 w-20 ${active && 'text-white shadow-text'}`}>
        <Link href={'/about'}>About</Link>
      </motion.div>

      <motion.div
        initial={{ rotate: -90, top: '50%', left: -50 }}
        animate={{
          top: '50%',
          left: '0px',
          transition: { duration: 1, delay: 0.5, type: 'spring' },
        }}
        whileHover={{ scale: 1.1 }}
        className={`absolute font-bold text-xl z-50  w-20 ${active && 'text-white shadow-text'}`}>
        <Link href={'/skills'}>Skills</Link>
      </motion.div>

      <motion.div
        initial={{ rotate: 90, top: '50%', right: -50 }}
        animate={{
          top: '50%',
          right: '0px',
          transition: { duration: 1, delay: 0.5, type: 'spring' },
        }}
        whileHover={{ scale: 1.1 }}
        className={`absolute font-bold text-xl z-50 w-20 ${active && 'text-white shadow-text'}`}>
        <Link href={'/contact'}>Contact</Link>
      </motion.div>

      <Socials />

      <Animation active={active} onClick={activeHandler} />
      <Promo active={active} />
    </main>
  );
}
