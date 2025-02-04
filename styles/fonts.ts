import { Inter, Poppins, DM_Sans } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});
const dm_sans = DM_Sans({
  variable: '--font-dmsans',
  subsets: ['latin'],
  display: 'swap',
});
const poppins_700 = Poppins({
  weight: '700',
  variable: '--font-poppins_700',
  subsets: ['latin'],
  display: 'swap',
});

export { inter, dm_sans, poppins_700 };
