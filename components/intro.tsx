'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import myPicture from '@/public/myPics.jpg';

export default function IntroSection() {
  return (
    <section className='intro-wrapper' id='home'>
      <div className='intro-wrapper-container'>
        <div className=' intro-wrapper-container-content'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: [null, 1.2], transition: { duration: 2, delay: 0.3 } }}
            transition={{
              type: 'tween',
              duration: 0.7,
            }}
          >
            <Image
              className='intro-content--img'
              src={myPicture}
              alt='Esezobor Portrait'
              width='192'
              height='192'
              quality='95'
              priority={true}
            />
          </motion.div>
          <motion.span
            className='intro-content--emoji'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.3,
              duration: 1.2,
            }}
          >
            🎒
          </motion.span>
        </div>
      </div>
      <motion.h1
        className='intro-wrapper--header'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: [null, 1.2], transition: { duration: 2, delay: 0.3 } }}
        transition={{
          delay: 0.5,
          duration: 1.6,
        }}
      >
        <span className='font-bold'>Hello, I am Samuel Esezobor.</span> I am a{' '}
        <span className='font-bold'>full-stack developer</span> with <span className='font-bold'>over 4 years</span> of
        experience. I enjoy building <span className='italic'>sites & apps</span>. My focus is{' '}
        <span className='underline'>React JS or Vue JS</span> for the Frontend and{' '}
        <span className='underline'>ASP.NET Core</span> for Backend.
      </motion.h1>
      <motion.div
        className='intro-wrapper-contact'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link href='#contact' className='contact-page group'>
          Contact me here <BsArrowRight className='contact-page-icon' />
        </Link>
        <a className='contact-download group' href='/Samuel Resume.pdf' download>
          Download CV <HiDownload className='contact-download-icon' />
        </a>

        <a className='contact-linkedln' href='https://www.linkedin.com/in/samuel-esezobor-6a0651240/' target='_blank'>
          <BsLinkedin />
        </a>

        <a className='contact-github' href='https://github.com/prodigy4801' target='_blank'>
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
