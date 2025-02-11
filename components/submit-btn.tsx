import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      // className='group flex items-center justify-center gap-2 h-[2.5rem] w-[8rem] bg-gray-800 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 hover:text-gray-200 active:scale-105 dark:text-black dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white'
      className='group flex items-center justify-center gap-3 h-[2.5rem] w-[8rem] bg-gray-800 text-white rounded-full outline-none transition-all dark:bg-white dark:text-black dark:hover:bg-gray-100 focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65'
      disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{' '}
        </>
      )}
    </button>
  );
}
