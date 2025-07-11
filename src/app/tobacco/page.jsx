"use client"

import Image from "next/image"

export default function CoffeePage() {
  return (
    <div className="flex min-h-screen bg-white">
      <div className=" items-center justify-center">
        <h2 className="text-sky-600 text-4xl pt-25 text-center">Lombok Coffee</h2>
      </div>
      <div className="bg-sky-500 rounded-xl p-8 text-white w-1/2 shadow-lg">
        <Image 
        className="rounded-xl overflow-hidden"
        src={'/image1.jpeg'}
        width={500}
        height={300}
        />
      </div>
      <div className="w-1/2 bg-white p-4">
        <h2 className="text-sky-500 text-center text-4xl font-medium justify-center pt-20">Specification</h2>
        <p className="text-sky-500 text-left text-xl">Complete Specification for Tobacco Item</p>
    </div>
    </div>
  )
}
