"use client";
import { useState } from "react";
import ProductModal from "@/components/ProductModal";

const productData = [
  {
    id: 1,
    name: 'Kopi Robusta Sembalun',
    imageUrl: '/coffee1.jpeg', // Ganti dengan path gambar yang sesuai
    shortDescription: 'Kopi Robusta berkarakter kuat dari lereng Gunung Rinjani. Memiliki body tebal (full body) dengan cita rasa dominan cokelat gelap dan kacang, serta tingkat keasaman yang rendah.',
    longDescription: 'Ditanam di lembah Sembalun yang subur dengan tanah vulkanik di ketinggian ideal, Kopi Robusta Sembalun menyerap kekayaan mineral yang menghasilkan cita rasa yang intens dan berani. Proses pascapanen yang teliti memastikan konsistensi kualitasnya sebagai biji kopi kelas ekspor. Kopi ini sangat cocok untuk diolah menjadi espresso yang kaya akan crema atau sebagai dasar yang kuat untuk minuman kopi berbasis susu seperti latte dan cappuccino, menjadikannya favorit para roaster.',
  },
  {
    id: 2,
    name: 'Kopi Arabika Rinjani',
    imageUrl: '/coffee2.jpeg', // Ganti dengan path gambar yang sesuai
    shortDescription: 'Kopi Arabika spesial dari dataran tinggi Rinjani yang aromatik. Menawarkan tingkat keasaman (acidity) yang cerah, body sedang, serta jejak rasa buah-buahan tropis dan gula merah.',
    longDescription: 'Kopi Arabika Rinjani adalah permata bagi para pencari kopi spesial. Ditanam di ketinggian di atas 1.200 MDPL, suhu yang sejuk membuat buah kopi matang secara perlahan, sehingga menghasilkan profil rasa yang kompleks dan manis. Saat diseduh, kopi ini mengeluarkan aroma floral yang memikat dengan sentuhan rasa citrus, buah beri, dan aftertaste yang bersih. Sangat direkomendasikan untuk metode seduh manual seperti V60 atau pour-over untuk mengeluarkan seluruh karakternya yang kaya.',
  },
  {
    id: 3,
    name: 'Kopi Luwak Liar Lombok',
    imageUrl: '/coffee3.jpeg', // Ganti dengan path gambar yang sesuai
    shortDescription: 'Salah satu kopi paling eksotis dan eksklusif di dunia. Biji kopi ini diproses secara alami oleh Luwak liar, menghasilkan minuman yang luar biasa halus, nyaris tanpa rasa pahit, dan beraroma kompleks.',
    longDescription: 'Kopi Luwak Liar Lombok berasal dari biji kopi Arabika terbaik yang dipilih dan dimakan oleh Luwak (Asian Palm Civet) yang hidup bebas di perkebunan sekitar Gunung Rinjani. Proses fermentasi alami di dalam sistem pencernaan Luwak memecah protein yang menyebabkan rasa pahit, sehingga menciptakan secangkir kopi yang sangat lembut dan halus (smooth). Cita rasanya kaya, dengan sentuhan earthy, karamel, dan cokelat. Karena kelangkaannya dan prosesnya yang 100% alami, kopi ini menjadi produk ultra-premium yang dicari oleh para kolektor dan penikmat kopi di seluruh dunia.',
  },
];

export default function CoffeePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <main id="/coffee">
    <div className="min-h-screen relative bg-white">
      <div className="absolute top-40 right-10 w-[450px] h-[400px] bg-sky-500 rounded-full opacity-65 blur-3xl z-10"/>
      <div className="absolute top-20 -left-20 w-[400px] h-[350px] bg-sky-500 rounded-full opacity-55 blur-3xl"/>    
      <div className="absolute bottom-10 left-70 w-[150px] h-[200px] bg-sky-700 rounded-full opacity-70 blur-3xl"/>
      
    {/* Text Tengah Atas */}
      <div className="relative text-center md:text-left justify-center items-center z-1 flex flex-col pt-4">
        <h3 className="text-3xl text-sky-700 font-light mb-2 mt-15 text-lg">Our Services</h3>
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
              <button
                onClick={() => handleOpenModal(product)}
                className="text-white bg-sky-700 shadow-lg shadow-cyan-500/50 rounded-full px-5 py-3 font-semibold hover:scale-105 mt-6">
              View Detail
              </button>
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
    </main>
  );
}
