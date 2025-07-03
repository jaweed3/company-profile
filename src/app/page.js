'use client'

import Link from "next/link";
import "./globals.css";

export default function Home() {
  
  return (
    <main className="relative min-h-screen bg-[url(/image3.jpeg)] bg-no-repeat bg-cover bg-center overflow-hidden text-center px-4 flex flex-col items-center justify-center">
    <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-400 rounded-full opacity-30 blur-3xl z-0" />
    <div className="absolute top-40 right-0 w-[300px] h-[300px] bg-sky-500 rounded-full opacity-25 blur-2xl z-0" />
    <div className="relative z-10 max-w-2xl">

        <h1 className="inline-block text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-400 via-purple-500 to-sky-400 bg-clip-text text-transparent my-6">Your Trusted Partner<br />for Premium Indonesian Product</h1>
      <p className="text-lg md:text-xl text-gray-100">
        <span className="text-sky-600 font-semibold">We connect global buyers with certified, handpicked goods — from natural spices to sustainable crafts.</span>
      </p>
    <div className="mt-8 flex justify-center gap-4">
      <CheckMoreButton />
    <Link href={"https://wa.me/6282236846398"} target="_blank" rel="noopener noreferrer">
      <ContactUs/>
    </Link>
    </div>
    </div>
    </main>
  )
}

function ContactUs() {
  return (
    <button
    type="button"
    className="bg-sky-500 shadow-lg shadow-sky-500/50 hover:bg-sky-700 text-white font-semibold px-6 py-2 rounded-lg transition ml-5"
    >
    Contact Us
    </button>
  );
}

function CheckMoreButton() {
  return (
    <button
    type="button"
    onClick={() => {
      document.getElementById("services").scrollIntoView({ behavior: "smooth"});
    }}
    className="bg-sky-500 shadow-lg shadow-sky-500/50 hover:bg-sky-700 text-white font-semibold px-6 py-2 rounded-lg transition"
    >
    Check Our Product
    </button>
  );
}


