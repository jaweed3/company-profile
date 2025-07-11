"use client"

import { useState } from "react";

const FAQItems = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-v last:border-b-0 py-4 bg-white">
      <div className="flex justify-between items-center cursor-pointer"
    onClick={toggleOpen}>
        <h3 className="font-semibold text-sky-600 text-lg">{question}</h3>
        <svg 
        className={`w-6 h-6 stroke-sky-600 transform transition-duration-200 ${isOpen ? 'rotate-180': '' }`}
        fill="none"
        viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l-4-4m0 0l4-4m-4 4h8" />
        </svg>
    </div>
    {isOpen && (
      <p className="mt-2 text-sky-500">{answer}</p>
    )}
    </div>
  );
};

const FAQList = () => {
  const faqData = [
    {
      question: "Apa saja produk ekspor unggulan dari Lombok?",
      answer: `Lombok memiliki beragam produk unggulan yang diminati pasar internasional, terutama dari sektor agrikultur, perikanan, dan kerajinan. Beberapa komoditas utamanya adalah:

    Hasil Laut: Mutiara Laut Selatan (South Sea Pearl) yang sangat terkenal, lobster, kepiting, ikan kerapu, dan rumput laut.

    Hasil Pertanian & Perkebunan: Kopi (khususnya Robusta Sembalun dan Arabika Senaru), kacang mete, vanili, kelapa dan produk turunannya seperti VCO (Virgin Coconut Oil).

    Kerajinan Tangan: Kain tenun tradisional (seperti tenun Sukarara dan Pringgasela), kerajinan ketak, dan kerajinan cukli (hiasan kulit kerang).`
    },
     {
      question: "Bagaimana Anda menjamin kualitas dan keaslian produk yang diekspor?",
      answer: `Kualitas adalah prioritas utama kami. Kami menerapkannya melalui beberapa tahapan:

    Sumber Langsung: Kami bekerja sama langsung dengan kelompok tani dan produsen terpilih di sentra-sentra produksi untuk memastikan keaslian dan lacak balak (traceability) produk.

    Kontrol Kualitas (QC) Bertahap: Tim kami melakukan proses sortir dan pemeriksaan kualitas yang ketat, mulai dari saat panen, pasca-pengolahan, hingga sebelum produk dikemas untuk pengiriman.

    Standar Pengolahan Ekspor: Kami memastikan semua produk diolah dan dikemas sesuai dengan standar internasional untuk menjaga daya tahan dan kualitasnya selama perjalanan.`
    },
     {
      question: "Apakah perusahaan Anda bekerja sama langsung dengan petani atau produsen lokal di Lombok?",
      answer: `Ya, model bisnis kami berlandaskan pada kemitraan yang adil dan berkelanjutan dengan para petani dan produsen lokal. Dengan membina hubungan langsung, kami tidak hanya dapat menjamin kualitas pasokan, tetapi juga turut serta dalam pemberdayaan ekonomi masyarakat lokal di Lombok. Kami juga memberikan pendampingan kepada mitra kami untuk menerapkan praktik pertanian yang baik (Good Agricultural Practices).`
    },
     {
      question: "Berapa kuantitas pesanan minimum (Minimum Order Quantity/MOQ) untuk melakukan pembelian?",
      answer: `MOQ kami bervariasi tergantung pada jenis komoditas dan kesepakatan. Sebagai contoh:

    Untuk kopi dan kacang mete, kami biasanya melayani pesanan mulai dari ratusan kilogram hingga beberapa ton (menggunakan kontainer).

    Untuk vanili dan mutiara, kami lebih fleksibel dan dapat didiskusikan sesuai kebutuhan spesifik Anda.

Kami sangat menyarankan Anda untuk menghubungi tim penjualan kami melalui email atau WhatsApp untuk mendiskusikan kebutuhan Anda secara detail dan mendapatkan penawaran terbaik.`
    },
     {
      question: "Ke negara mana saja perusahaan Anda biasanya melakukan ekspor dan bagaimana proses pengirimannya?",
      answer: `Kami telah memiliki pengalaman mengirimkan produk ke berbagai negara di kawasan Asia Timur (seperti Jepang & Korea Selatan), Eropa, dan Amerika Serikat.

Kami dapat menangani seluruh proses logistik secara profesional, meliputi:

    Pengemasan sesuai standar ekspor (aman dan higienis).

    Pengurusan semua dokumen yang diperlukan (Certificate of Origin, Phytosanitary Certificate, dll).

    Pengaturan pengiriman baik melalui laut (Sea Freight) maupun udara (Air Freight), dengan opsi pengiriman FOB (Free on Board) dari Pelabuhan Lembar/Surabaya atau CIF (Cost, Insurance, and Freight) sampai ke pelabuhan negara tujuan Anda.`
    },
  ];

  return (
    <div className="bg-white pb-12">
    <div className="max-w-4xl mx-auto p-12 bg-white">
      <h1 className="text-center mb-4 text-4xl text-sky-400 font-bold">Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
      <FAQItems key={index} answer={item.answer} question={item.question} />
      ))}
    </div>
    </div>
  );
};

export default FAQList;
