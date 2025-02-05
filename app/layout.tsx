import type { Metadata } from 'next';
import { inter, dm_sans, poppins_700 } from '@/styles/fonts';
//import { Inter, Poppins, DM_Sans } from 'next/font/google';
//import { inter } from '@/fonts';
// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Esezobor | Portfolio',
  description: 'Samuel Esezobor is a full-stack software developer with over 5 years of experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${dm_sans.variable} ${poppins_700.variable} antialiased`}>
        <div className='splashright'></div>
        <div className='splashleft'></div>
        {children}
      </body>
    </html>
  );
}
