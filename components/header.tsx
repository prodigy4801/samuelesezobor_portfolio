'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NavigationLinks as links } from '@/lib/data.lib';
import clsx from 'clsx';
//import { useActiveSectionContext } from '@/context/active-context-section';

export default function TopHeader() {
  //const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <header className='header-wrapper'>
      <motion.div
        className='header-wrapper-fixed'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
      ></motion.div>
      <nav className='header-wrapper-nav'>
        <ul className='nav-container'>
          {links.map((link, index) => (
            <motion.li
              key={index}
              className='nav-container-content'
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
            >
              <Link href={link.hash} className={clsx('nav-container-content--link')}>
                {link.name}
              </Link>
              {/* <Link
                href={link.hash}
                className={clsx('nav-container-content--link', {
                  'nav-container-content--clicklink': activeSection === link.name,
                })}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className='nav-activelink'
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link> */}
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
