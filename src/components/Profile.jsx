'use client'

import SplitText from "@/components/TextSplit";

const handleAnimationComplete = () => {
  console.log('all Letter Have Animated');
};

export default function Profile() {
  return (
    <section id="About" className="min-h-screen z-10 relative bg-white py-16 md:px-20 overflow-hidden">
    {/* Background Effect */}
    <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400 rounded-full opacity-30 blur-3xl z-0"/>
    <div className="absolute top-40 right-0 w-[350px] h-[300px] bg-sky-500 rounded-full opacity-25 blur-2xl z-0"/>
    <div className="max-w-6xl mx-auto mt-15 p-20 grid md:grid-cols-2 gap-16 items-center z-10">

    {/* Left Text */}
    <div className="text-center md:text-left">
      <div>
      <SplitText
      text="About Us"
      className="text-2xl text-purple-600 text-center mb-10"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0}}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      onLetterAnimationComplete={handleAnimationComplete}
      />
      </div>
      <div>
      <SplitText
      text="CV Mule Jati"
      className="text-5xl text-sky-600 font-bold text-center"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0}}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      onLetterAnimationComplete={handleAnimationComplete}
      />
      </div>
      <p className="mt-10 text-sky-800 leading-relaxed">
      PT Mulejati Jaya adalah perusahaan ekspor terkemuka yang berlokasi di Lombok, Nusa Tenggara Barat, Indonesia.
      Kami berdedikasi untuk mempromosikan kekayaan sumber daya alam Lombok ke pasar global.
      </p>
    </div>

    {/*Right Image Group */}
    <div className="relative w-full h-full h-[400px] md:h-[500px] flex items-center justify-center">
      <div className="absolute bg-sky-500 shadow-2xl shadow-sky-500/70 w-40 md:w-52 h-60 md:h-72 overflow-hidden rounded-3xl -top-20 left-18 rotate-[-6deg]">
        <img src="/image1.jpeg" alt="Tembakau" className="w-full h-full object-cover"/>
      </div>
      <div className="absolute bg-sky-500 shadow-2xl shadow-sky-500/70 w-70 h-86 overflow-hidden rounded-3xl absolute top-20 left-50 rotate-[3deg] z-10">
        <img src="/image2.jpeg" alt="Barang Ekspor" className="w-full h-full object-cover"/>
      </div>
      <div className="absolute bg-sky-500 shadow-2xl shadow-sky-500/70 w-110 h-140 overflow-hidden rounded-3xl absolute -top-20 left-90 rotate-none z-20">
        <img src="/image2.jpeg" alt="Barang Ekspor" className="w-full h-full object-cover"/>
      </div>
    </div>
    </div>
    </section>
  );
}
