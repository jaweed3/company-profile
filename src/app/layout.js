'use client'

import './globals.css';
import NavBar from '@/components/NavBar';
import {  Montserrat } from 'next/font/google';

import Footer from '@/components/Footer';
const montserrat = Montserrat({
  weight: ['300', '400','500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({ children }) {
  return (
    <html 
    lang='en'
>
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <style
    jsx global>{`
      html {
        font-family: ${montserrat.style.fontFamily};
      }
      `}</style>
      <body 
    className={montserrat.className}>
    <NavBar />
	{children}
    <Footer />
      </body>
    </html>
  )
}
