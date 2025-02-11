import type { Metadata } from 'next';
import { inter, dm_sans, poppins_700 } from '@/styles/fonts';
import TopHeader from '@/components/header';
import './globals.scss';
import ActiveSectionContextProvider from '@/context/active-context-section';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

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
      <body className={`${inter.variable} ${dm_sans.variable} ${poppins_700.variable}`}>
        <div className='splashright'></div>
        <div className='splashleft'></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <TopHeader />
            {children}
            <Toaster position='top-right' />
            <Footer></Footer>
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
