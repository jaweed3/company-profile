import Image from "next/image";

export default function ProductModal({ product, isOpen, onClose }) {
  
  if (!isOpen || !product ){
    return null;
  }

  return (
  <div
    onClick={onClose}
    className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-60 transition-opacity duration-300"
    >
      <div 
      onClick={(e) => e.stopPropagation()}
      className="relative w-[90%] max-w-lg max-h-[90vh] overflow-y-auto transform rounded-lg bg-white p-4 sm:p-6 shadow-xl transition-all duration-300"
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray shadow-md transition hover:bg-red-500 hover:text-white"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5}   
            stroke="currentColor" 
            className="h-6 w-6"
          >
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      
      {/* Detail Produk */}
      <div className="flex flex-col space-y-4">
        {product.imageUrl && (
        <div className="w-full h-auto">
          <Image 
            src={product.imageUrl} 
            alt={product.name} 
            width={500} 
            height={400} 
            className="rounded-lg object-cover w-full h-auto max-h-[250px] sm:max-h-[400px]" 
            />
        </div>
        )}
      <h2 className="text-xl sm:text-2xl font-bold text-sky-500">
         {product.name}
      </h2>
      <p className="text-sm sm:text-base text-blue-500">
        {product.longDescription}
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
          {product.tag1}
        </span>
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-400">
          {product.tag2}
        </span>
      </div>

      <button className="w-full rounded-lg bg-sky-500 py-2 font-bold text-white transition hover:bg-blue-700">
        Hubungi Untuk Penawaran
      </button>
    </div>
    </div>
    </div>
  );
}
