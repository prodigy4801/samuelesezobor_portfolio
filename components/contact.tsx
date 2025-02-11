'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';
import SubmitBtn from './submit-btn';

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.2);
  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%,40rem)] text-center scroll-mt-28'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        delay: 0.3,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700 text-base -mt-6 dark:text-white/80'>
        Please contact me directly at{' '}
        <a className='underline text-blue-600 italic' href='mailto:samuel.esezobor076@gmail.com'>
          samuel.esezobor076@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          const errorMessage =
            error != null
              ? error
              : 'Failed, could not send email at this time. Contact me with my email: samuel.esezobor076@gmail.com.';
          if (data != null && data?.error) {
            toast.error(errorMessage);
          } else {
            toast.success('Email sent successfully!');
          }
        }}
        className='mt-10 flex flex-col dark:text-black'
      >
        <input
          className='h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
