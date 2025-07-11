"use client";
import ProductModal from "@/components/ProductModal";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const productData = [
  {
    id: 1,
    name: 'Kopi',
    link: '/coffee',
    imageUrl: '/coffee1.jpeg',
    shortDescription: 'Primadona ekspor dari Lombok yang dikenal karena kualitas premiumnya. Tembakau ini memiliki karakter rasa sedikit manis dengan aroma khas yang kuat dan warna daun kuning keemasan yang menawan.',
    longDescription: 'Tembakau Kasturi adalah representasi kualitas terbaik dari tembakau Lombok di pasar internasional. Melalui proses pengeringan dan pemeraman yang sangat teliti, varietas ini menghasilkan profil rasa yang seimbang dan kompleks. Karakteristik utamanya adalah sensasi rasa yang sedikit manis di awal, diikuti oleh aroma yang kaya dan khas saat dibakar. Warnanya yang kuning keemasan bukan hanya indah dipandang, tetapi juga menjadi indikator tingkat kematangan dan kualitas pengolahan yang sempurna. Tembakau ini sangat dicari untuk bahan baku rokok premium dan sebagai bahan utama dalam berbagai racikan berkualitas tinggi.',
  },
  {
    id: 2,
    name: 'Seafood',
    link: '/seafood',
    imageUrl: '/seafood1.jpeg',
    shortDescription: 'Varietas Virginia yang unik dengan aroma wangi yang khas, sering disamakan dengan aroma daun pandan. Rasanya lebih halus dan ringan, menjadikannya favorit di kalangan masyarakat lokal untuk penggunaan harian.',
    longDescription: 'Tembakau Virginia Lombok menawarkan sebuah pengalaman yang berbeda dari tembakau Virginia pada umumnya. Berkat adaptasinya dengan iklim dan tanah (terroir) khas Lombok, tembakau ini mengembangkan karakteristik unik berupa aroma wangi yang kuat seperti daun pandan. Profil rasanya yang lebih ringan dan halus memberikan sensasi merokok yang tidak terlalu berat, sehingga sangat cocok bagi pemula atau mereka yang menikmati tembakau untuk bersantai. Keunikannya ini menjadikannya primadona di pasar lokal dan memiliki potensi besar sebagai produk ekspor khusus yang menyasar pasar pencari cita rasa eksotis.',
  },
  {
    id: 3,
    name: 'Tembakau',
    link: '/tobacco',
    imageUrl: '/images3.jpeg',
    shortDescription: 'Tembakau dengan karakter yang sangat kuat, rasa cenderung pahit, dan aroma tajam. Jenis ini tidak untuk dinikmati sendiri, melainkan berfungsi sebagai "bumbu" atau campuran untuk menambah kekuatan dan karakter pada racikan.',
    longDescription: 'Tembakau Pait adalah seorang maestro di balik layar dalam dunia racikan tembakau. Seperti namanya, ia memiliki profil rasa yang kuat dan pahit dengan aroma yang menusuk. Fungsi utamanya bukanlah untuk dikonsumsi secara mandiri, melainkan sebagai komponen kunci dalam sebuah blend (campuran). Hanya dengan menambahkan sedikit Tembakau Pait, sebuah racikan yang lemah dapat langsung meningkat kekuatannya, mendapatkan "tendangan" (kick) yang solid, serta kedalaman rasa yang lebih kompleks. Bagi para peracik, Tembakau Pait adalah bahan esensial untuk menciptakan produk akhir yang berkarakter dan seimbang.',
  },
]

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen relative bg-white" id="services">
      <div className="absolute top-40 right-10 w-[450px] h-[400px] bg-sky-500 rounded-full opacity-65 blur-3xl z-10"/>
      <div className="absolute top-20 -left-20 w-[400px] h-[350px] bg-sky-500 rounded-full opacity-55 blur-3xl"/>    
      <div className="absolute bottom-10 left-70 w-[150px] h-[200px] bg-sky-700 rounded-full opacity-70 blur-3xl"/>
      
    {/* Text Tengah Atas */}
      <div className="relative text-center md:text-left justify-center items-center z-1 flex flex-col pt-4">
        <h3 className="text-3xl text-sky-700 font-light mb-2 text-lg">Our Services</h3>
        <h1 className="text-4xl text-sky-600 font-medium pt-2 z-1 mb-15">See What We Have</h1>
      </div>

    {/* Container grid gambar */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
        {productData.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-xl overflow-hidden z-30 flex flex-col">
            <div>
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            </div>

            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <h3 className="text-xl text-sky-600 font-semibold mb-2">{product.name}</h3>
              <p className="text-wrap text-sky-600 text-sm mb-4 flex-grow">
                {product.shortDescription}
              </p>
            <Link href={product.link} passHref>
              <button
                onClick={() => redirect(product.link)}
                className="text-white bg-sky-700 shadow-lg shadow-cyan-500/50 rounded-full px-5 py-3 font-semibold hover:scale-105 mt-6">
              View Detail
              </button>
            </Link>
            </div>
          </div>
        ))}
      </div>

    {/* Komponen Modal */}
    <ProductModal
    isOpen={isModalOpen}
    onClose={handleCloseModal}
    product={selectedProduct}
    />
    </div>
  );
}
