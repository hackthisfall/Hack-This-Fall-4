import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { DM_Sans, Poppins } from 'next/font/google';
import localFont from 'next/font/local';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-popins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const nohemi = localFont({
  src: './fonts/nohemi.woff2',
  variable: '--font-nohemi',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nohemi.variable} ${poppins.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
