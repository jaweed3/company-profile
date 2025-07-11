"use client";

import Masonry from "react-masonry-css";

const images = [
  "/lombok1.jpeg",
"/lombok2.jpeg",
"/lombok3.jpeg",
"/lombok4.jpeg",
"/lombok5.jpeg",
"/lombok6.jpeg",
"/lombok7.jpeg",
"/lombok8.jpeg",
"/lombok9.jpeg",
"/lombok10.jpg",
"/lombok11.jpeg",
"/lombok12.jpeg",
];

export default function Gallery() {
  const breakpoints = {
    default: 4,
    1100: 3,
    700:2,
    500:1
  };

  return (
    <main className="min-h-screen z-10 relative bg-white overflow-hidden" id="Gallery">
    <div className="absolute top-35 left-0 w-full h-26 bg-gradient-to-b from-white via-white/80 to-transparent z-30 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-full h-26 bg-gradient-to-t from-white via-white/60 to-transparent z-30 pointer-events-none" />

    <div className="absolute bottom-40 right-60 w-[350px] h-[250px] bg-sky-700 rounded-full opacity-70 blur-3xl z-0"/>    
    <div className="absolute bottom-10 left-70 w-[150px] h-[200px] bg-sky-700 rounded-full opacity-70 blur-3xl z-0"/>

    <h1 className="text-4xl text-sky-600 text-center pt-7 pb-4 font-semibold mb-1">Gallery</h1>
    <h2 className="text-2xl text-sky-600 text-center font-medium mb-8">Lombok Have Anything You Need</h2>

    <div className="relative z-10 px-4">
      <Masonry
        breakpointCols={breakpoints}
        className="flex w-auto gap-4 p-4 z-50"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, index) => (
          <img
          key={index}
          src={src}
          alt={`Gallery ${index}`}
          className="rounded-lg shadow-md hover:scale-105 transition-all duration-300"
          />
        ))}
      </Masonry>
    </div>
    </main>
  );
}
