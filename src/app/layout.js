'use client'

import './globals.css';
import NavBar from '@/pages/NavBar';
import {  Montserrat } from 'next/font/google';
import Profile from '@/pages/Profile';
import Footer from '@/pages/Footer';
import Services from '@/pages/Services';
import Gallery from '@/pages/Gallery';
import Client from '@/pages/Client';
import FAQList from '@/pages/FAQ';

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
    <Profile />
    <Services />
    <Gallery />
    <Client />
    <FAQList />
    <Footer />
      </body>
    </html>
  )
}
