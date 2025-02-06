'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');
  return (
    <motion.section
      className='about-wrapper'
      id='about'
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 3 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>
        After graduating with a bachelor degree in <span className='font-medium'>Computer Science</span>, I decided to
        pursue my passion for programming. I worked under a old friend of mine who was an Application Developer
        Consultant for Access Bank for 1 year before i got my first Software developer job at SEIS 1811 Ikeja where I
        developed a <span className='font-medium'> desktop application </span>ERP system using{' '}
        <span className='font-medium'>Visual Basic .NET </span>.{' '}
        <span className='italic'>My favorite part of programming</span> is the problem-solving aspect. My core stack are{' '}
        <span className='font-medium'>
          ASP.NET, React JS, Vue JS, Python, SQL, Javascript, CSS, HTML and Visual Basic.NET
        </span>
        . I am also familiar with Tailwind, TypeScript and Prisma. I am always looking to learn new technologies. I am
        currently looking for a <span className='font-medium'>full-stack position</span> as a software developer.
      </p>
      <p>
        <span className='italic'>When I am not coding</span>, I enjoy playing video games, and watching sports. I also
        enjoy <span className='font-medium'>learning new things</span>. I am currently learning about{' '}
        <span className='font-medium'>Cloud Computing with Azure</span>.
      </p>
    </motion.section>
  );
}
