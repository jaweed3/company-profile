import TextAnimation from "./RevealText.jsx";

export default function Profile() {
  return (
    <section id="About" className="min-h-screen z-10 relative bg-white py-16 md:px-20">
    {/* Background Effect */}
    <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400 rounded-full opacity-30 blur-3xl z-0"/>
    <div className="absolute top-40 right-0 w-[350px] h-[300px] bg-sky-500 rounded-full opacity-25 blur-2xl z-0"/>
    <div className="max-w-6xl mx-auto mt-15 p-30 grid md:grid-cols-2 gap-16 items-center z-10">

    {/* Left Text */}
    <div className="text-center md:text-left">
      <h3 className="text-gray-600 mb-2 text-lg">About Us</h3>
      <h2 className="text-5xl font-bold text-gray-900 drop-shadow-md pt-6">PT MULEJATI JAYA</h2>
      <TextAnimation className={"text-5xl font-bold text-cyan-700 drop-shadow-md pt-6"} text={"PT MULAJATI JAYA"}/>
      <p className="mt-20 text-gray-700 leading-relaxed">
      PT Mulejati Jaya adalah perusahaan ekspor terkemuka yang berlokasi di Lombok, Nusa Tenggara Barat, Indonesia.
      Kami berdedikasi untuk mempromosikan kekayaan sumber daya alam Lombok ke pasar global.
      </p>
    </div>

    {/*Right Image Group */}
    <div className="relative w-full h-full">
      <div className="w-60 h-78 overflow-hidden rounded-3xl shadow-lg -top-20 left-18 rotate-[-6deg]">
        <img src="/image1.jpeg" alt="Tembakau" className="w-full h-full object-cover"/>
      </div>
      <div className="w-70 h-86 overflow-hidden rounded-3xl shadow-lg absolute top-20 left-50 rotate-[3deg] z-10">
        <img src="/image2.jpeg" alt="Barang Ekspor" className="w-full h-full object-cover"/>
      </div>
      <div className="w-110 h-140 overflow-hidden rounded-3xl shadow-2xl absolute -top-20 left-90 rotate-none z-20">
        <img src="/image2.jpeg" alt="Barang Ekspor" className="w-full h-full object-cover"/>
      </div>
    </div>
    </div>
    </section>
  );
}
