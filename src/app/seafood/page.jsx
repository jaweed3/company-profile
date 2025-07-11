"use client";
import { useState } from "react";
import ProductModal from "@/components/ProductModal";

const productData = [
  {
    id: 1,
    name: 'Lobster Mutiara (Panulirus ornatus)',
    imageUrl: '/seafood3.jpeg', // Ganti dengan path gambar yang sesuai
    shortDescription: 'Raja dari segala lobster yang berasal dari perairan jernih Lombok. Dikenal karena coraknya yang indah, dagingnya yang padat, manis, dan sangat digemari di pasar kuliner kelas atas internasional.',
    longDescription: 'Lobster Mutiara dari Lombok adalah produk bahari premium yang menjadi incaran para chef di seluruh dunia. Dibudidayakan dan ditangkap dari perairan selatan Lombok yang bersih dan kaya nutrisi, lobster ini memiliki kualitas terbaik. Dagingnya yang tebal, berserat lembut, dan bercita rasa manis sangat cocok untuk diolah menjadi sashimi, dibakar, atau dikukus. Kami menjamin setiap lobster yang diekspor telah melalui proses seleksi kualitas yang ketat, memastikan kesegaran dan ukuran yang sesuai dengan standar ekspor.',
  },
  {
    id: 2,
    name: 'Mutiara Laut Selatan (South Sea Pearl)',
    imageUrl: '/seafood2.jpeg', // Ganti dengan path gambar yang sesuai
    shortDescription: 'Permata organik dari Lombok yang diakui dunia. Dihasilkan oleh kerang Pinctada maxima, mutiara ini memiliki kilau (luster) yang luar biasa, ukuran besar, dan warna mulai dari putih keperakan hingga keemasan.',
    longDescription: 'Lombok adalah salah satu produsen Mutiara Laut Selatan terbaik di dunia, sebuah bukti dari kualitas perairannya yang masih alami. Setiap butir mutiara adalah hasil dari proses budidaya yang memakan waktu bertahun-tahun, menghasilkan permata dengan kilau yang dalam dan hangat. Mutiara ini diekspor untuk industri perhiasan mewah global, di mana ia diolah menjadi kalung, anting, dan cincin bernilai tinggi. Kami menyediakan mutiara dalam berbagai grade dan ukuran, baik dalam bentuk butiran (loose pearls) maupun untaian (strands).',
  },
  {
    id: 3,
    name: 'Rumput Laut Kering (Eucheuma cottonii)',
    imageUrl: '/seafood1.jpeg', // Ganti dengan path gambar yang sesuai
    shortDescription: 'Komoditas bahari serbaguna yang menjadi bahan baku utama industri global. Dibudidayakan di pesisir Lombok, rumput laut kering ini diekspor sebagai sumber utama karagenan.',
    longDescription: 'Rumput Laut jenis Eucheuma cottonii merupakan salah satu komoditas ekspor terbesar dari sektor perikanan Lombok. Setelah dipanen, rumput laut dijemur di bawah sinar matahari hingga mencapai tingkat kekeringan yang ideal untuk ekspor. Produk ini adalah bahan baku vital untuk ekstraksi karagenan, yaitu zat pengental dan penstabil alami yang digunakan secara luas dalam industri makanan (es krim, saus), kosmetik, dan farmasi di seluruh dunia. Kualitasnya yang tinggi menjadikan rumput laut Lombok pilihan utama bagi banyak manufaktur internasional.',
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
    <main id="/seafood">
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
