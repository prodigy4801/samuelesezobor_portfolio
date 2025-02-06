'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { TProjectModel } from '@/models/lib.model';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Project({ title, description, imageUrl, tags }: TProjectModel) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className='group project-container'
    >
      <section className='project-container-wrapper'>
        <div className='project-profile sm:group-even:ml-[18rem]'>
          <h3 className='project-profile--header'>{title}</h3>
          <p className='project-profile--description'>{description}</p>
          <ul className='project-profile-listcontent'>
            {tags.map((tag, index) => (
              <li className='project-list' key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt='Project I worked on'
          quality={95}
          className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40'
        />
      </section>
    </motion.div>
  );
}
