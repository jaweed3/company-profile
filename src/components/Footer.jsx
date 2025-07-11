import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const socialLinks = [
  {
    href: "https://www.instagram.com/satriyawann",
    label: "Instagram",
    Icon: FaInstagram
  },
  {
    href: "https://wa.me/6282236846398",
    label: "Whatsapp",
    Icon: FaWhatsapp
  },
  {
    href: "https://www.facebook.com/satriyawan.wann?rdid=XhvILsFVBvXmgw3m&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19KxiuoK15%2F",
    label: "Facebook",
    Icon: FaFacebook
  },
  {
    href: "mailto:satriyagomong@gmail.com",
    label: "Gmail",
    Icon: SiGmail
  },
];

const navLinks = [
  { href: "#Products", label: "Products" },
  { href: "#About", label: "About" },
  { href: "#Marketplace", label: "Marketplace" },
  { href: "#Features", label: "Features"}
];

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-wide">PT MULEJATI JAYA</h2>
            <p className="text-sm text-blue-200 mt-1">Indonesian product, Global Reach</p>
          </div>

        {/* Navigation */}
          <div className="flex gap-6 text-sm text-blue-200">
            <a href="#Products" className="hover:text-white">Products</a>
            <a href="#About" className="hover:text-white">About</a>
            <a href="#Marketplace" className="hover:text-white">Marketplace</a>
            <a href="#Features" className="hover:text-white">Features</a>
          </div>
        </div>

        {/* Contact Details*/}
          <div className="flex gap-4 text-sm text-white mt-6 items-center justify-center">
            <Link href={"https://www.instagram.com/satriyawann"} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-4xl text-white hover:text-sky-300" />
            </Link>
            <Link href={"https://wa.me/6282236846398"} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-4xl text-white hover:text-sky-300" />
            </Link>
            <Link href={"https://www.facebook.com/satriyawan.wann?rdid=XhvILsFVBvXmgw3m&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19KxiuoK15%2F"} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-4xl text-white hover:text-sky-300" />
            </Link>
            <Link href={"mailto:satriyagomong@gmail.com"} target="_blank" rel="noopener noreferrer">
              <SiGmail className="text-4xl text-white hover:text-sky-300" />
            </Link>
          </div>

        {/* Bottom Bar */}
          <div className="mt-8 border-blue-600 pt-4 text-center text-xs text-blue-300">
            &copy; {new Date().getFullYear()} CV Mule Jati. All Right Reserved.
        </div>
      </div>
    </footer>
  );
}
