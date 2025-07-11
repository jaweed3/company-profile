"use client"

import Image from "next/image"

export default function Client() {
  return (
    <div>
    <h1 className="text-4xl font-semibold text-white text-center bg-sky-400 pt-5">Our Clients</h1>
    <div className="bg-sky-400 grid grid-cols-1 md:grid-cols-3 text-white py-10">
      <div className="max-w-6l mx-auto px-4 ms:px-6 lg:px-8">
        <ProfileCard 
          name={"Jawed"}
          title={"ML Engineer"}
          imageUrl={"/lombok2.jpeg"}
          testimoni={"Pelayanan dan Barang yang berkualitas sekali"}
        />
      </div>
      <div className="max-w-6l mx-auto px-4 ms:px-6 lg:px-8">
        <ProfileCard 
          name={"Jawed"}
          title={"ML Engineer"}
          imageUrl={"/lombok2.jpeg"}
          testimoni={"Pelayanan dan Barang yang berkualitas sekali"}
        />
      </div>
      <div className="max-w-6l mx-auto px-4 ms:px-6 lg:px-8">
        <ProfileCard 
          name={"Jawed"}
          title={"ML Engineer"}
          imageUrl={"/lombok2.jpeg"}
          testimoni={"Pelayanan dan Barang yang berkualitas sekali"}
        />
      </div>

    </div>
    </div>
  )
}

const ProfileCard = ({ name, title, imageUrl, testimoni }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4 max-w-sm mx-auto">
    {/* Bagian Gambar */}
    <div className="relative w-16 h-16 rounded-full overflow-hidden">
      <Image
      src={imageUrl}
      alt={name}
      layout="fill"
      objectFit="cover"
      className="rounded-full"
    />
    </div>

    {/* Bagian Text */}
    <div>
      <h3 className="text-sky-500 text-lg font-semibold">{name}</h3>
      <h2 className="text-sky-400 text-sm font-medium">{title}</h2>
      <p className="text-sky-400 text-xs font-tiny">{testimoni}</p>
    </div>
    </div>
  )
}
