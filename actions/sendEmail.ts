'use server';
import React from 'react';
import { validateData, getErrorMessage } from '@/lib/utils.lib';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');
  const resend = new Resend(process.env.RESEND_API_KEY);

  if (!validateData(senderEmail, 500)) {
    return {
      error: 'Invalid Sender Email.',
    };
  }
  if (!validateData(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'prodigy4801@gmail.com',
      subject: 'Message from contact form',
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
