import type { Metadata } from 'next';
import { inter, dm_sans, poppins_700 } from '@/styles/fonts';
import TopHeader from '@/components/header';
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
    <html lang='en' className='!scroll-smooth'>
      <body className={`${inter.variable} ${dm_sans.variable} ${poppins_700.variable} antialiased`}>
        <div className='splashright'></div>
        <div className='splashleft'></div>
        <TopHeader />
        {children}
      </body>
    </html>
  );
}
