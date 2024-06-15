import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

const merriweather = Merriweather({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'NextPosts',
  description: 'Browse and share amazing posts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
