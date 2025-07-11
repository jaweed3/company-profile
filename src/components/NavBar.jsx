"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: 'Products', href: '#Products'},
  { name: 'About Company', href: '#About'},
  { name: 'Marketplace', href: '#Marketplace'},
  { name: 'Services', href: '#services'},
  { name: 'Gallery', href: '#Gallery'}
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
    <div className="w-full backdrop-blur-sm bg-gradient-to-r from-sky-500/80 via-sky-400/70 to-sky-300/80 px-8 py-5 shadow-md rounded-none flex justify-center"> 
      <Link href="/">
        <Image src="/logo.png" width={100} height={15} alt="logo1" className="absolute left-10"/>
      </Link>

    {/* Hamburger Menu */}
    <button
      className="md:hidden text-white text-2xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>

    {/* Menu Desktop */}
      <div className="hidden md:flex gap-10 items-center">
        {navigation.map((item) => (
            <a key={item.name} 
              href={item.href} 
              className="font-semibold hover:text-sky-400 border-b-2 border-transparent hover:text-sky-700 transition">
              {item.name}
            </a>
        ))}
      </div>
    </div>

    {/* Menu - Mobile */}
    {menuOpen && (
    <div className="md:hidden flex flex-col items-start bg-sky-200 px-6 py-2">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="py-2 text-sky-800 font-medium w-full border-b"
          onClick={() => setMenuOpen(false)}
        >
          {item.name}
        </a>
      ))}
      </div>
    )}
  </nav>
  );
}
