'use client'

import '@/app/globals.css'
import {  Montserrat } from 'next/font/google';

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
    <body className={montserrat.className}>
  	{children}
    </body>
    </html>
  )
}
