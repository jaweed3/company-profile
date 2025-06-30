import './globals.css';
import NavBar from '@/components/NavBar';
import { Roboto, Poppins } from 'next/font/google';
import Profile from '@/components/Profile';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']

})    

export const metadata = {
  title: 'Company Profile',
  description: 'Export Company Website'
}

export default function RootLayout({ children }) {
  return (
    <html 
    lang='en'
>
      <body 
    className={roboto.className}>
    <NavBar />
	{children}
    <Profile />
    <Services />
    <Footer />
      </body>
    </html>
  )
}
