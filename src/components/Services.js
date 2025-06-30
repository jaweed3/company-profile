export default function Services() {
  return (
    <div className="min-h-screen relative bg-white">
      <div className="absolute top-40 right-10 w-[450px] h-[400px] bg-sky-500 rounded-full opacity-25 blur-3xl"/>
      
    {/* Text Tengah Atas */}
      <div className="relative text-center md:text-left justify-center items-center z-1 flex flex-col pt-4">
        <h3 className="text-2xl text-black font-bold mb-2 text-lg">Our Services</h3>
        <h1 className="text-3xl text-sky-600 font-bold pt-2 z-1">See What We Have</h1>
      </div>

    {/* Container grid gambar */}
      <div className="grid grid-cols-3 place-items-center gap-5 mt-20 flex flex-col"> 
      
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div>
          <img src="/image1.jpeg" alt="Pic1" className="w-full h-48 object-cover" />
        </div>
        <div className="p-25 flex flex-col items-center text-center">
            <div className="mb-4 text-3xl text-sky-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.002v.001m0-.001-.001-4.502a.75.75 0 0 1 .75-.75h.998a.75.75 0 0 1 .75.75v4.502ZM4.5 12h-.001m0-.001-4.502-.001a.75.75 0 0 1-.75-.75v-.998a.75.75 0 0 1 .75-.75h4.502ZM12 18h-.001m0-.001 4.502.001a.75.75 0 0 1 .75.75v.998a.75.75 0 0 1-.75.75H12Zm4.5-6h.001m0-.001 4.502.001a.75.75 0 0 1 .75.75v.998a.75.75 0 0 1-.75.75h-4.502ZM18 12.75v.001m0-.001 4.502.001a.75.75 0 0 1 .75.75v.998a.75.75 0 0 1-.75.75h-4.502ZM12 18v.001m0-.001-4.502-.001a.75.75 0 0 1-.75-.75v-.998a.75.75 0 0 1 .75-.75h4.502Z" />
              </svg>
            </div>

            <h3 className="text-xl text-sky-900 font-semibold mb-2">Barang Mahal </h3> 
            <p className="text-sky-600 text-sm mb-4">
            INi Deskripsinya
            </p>

            <a href="#" className="text-sky-600 font-semibold hover:underline">
              View Detail
            </a>
          </div>
        </div>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div>
          <img src="/image1.jpeg" alt="Pic1" className="w-full h-48 object-cover" />
        </div>
          <div className="p-25 flex flex-col items-center text-center">
            <div className="mb-4 text-3xl text-sky-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.002v.001m0-.001-.001-4.502a.75.75 0 0 1 .75-.75h.998a.75.75 0 0 1 .75.75v4.502ZM4.5 12h-.001m0-.001-4.502-.001a.75.75 0 0 1-.75-.75v-.998a.75.75 0 0 1 .75-.75h4.502ZM12 18h-.001m0-.001 4.502.001a.75.75 0 0 1 .75.75v.998a.75.75 0 0 1-.75.75H12Zm4.5-6h.001m0-.001 4.502.001a.75.75 0 0 1 .75.75v.998a.75.75 0 0 1-.75.75h-4.502ZM18 12.75v.001m0-.001 4.502.001a.75.75 0 0 1 .75.75v.998a.75.75 0 0 1-.75.75h-4.502ZM12 18v.001m0-.001-4.502-.001a.75.75 0 0 1-.75-.75v-.998a.75.75 0 0 1 .75-.75h4.502Z" />
              </svg>
            </div>

            <h3 className="text-xl text-sky-900 font-semibold mb-2">Barang Mahal </h3> 
            <p className="text-sky-600 text-sm mb-4">
            INi Deskripsinya
            </p>

            <a href="#" className="text-sky-600 font-semibold hover:underline">
              View Detail
            </a>
          </div>
        </div>
        
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div>
          <img src="/image1.jpeg" alt="Pic1" className="w-full h-48 object-cover" />
        </div>
          <div className="p-25 flex flex-col items-center text-center">
            <div className="mb-4 text-3xl text-sky-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.002v.001m0-.001-.001-4.502a.75.75 0 0 1 .75-.75h.998a.75.75 0 0 1 .75.75v4.502ZM4.5 12h-.001m0-.001-4.502-.001a.75.75 0 0 1-.75-.75v-.998a.75.75 0 0 1 .75-.75h4.502ZM12 18h-.001m0-.001 4.502.001a.75.75 0 0 1 .75.75v.998a.75.75 0 0 1-.75.75H12Zm4.5-6h.001m0-.001 4.502.001a.75.75 0 0 1 .75.75v.998a.75.75 0 0 1-.75.75h-4.502ZM18 12.75v.001m0-.001 4.502.001a.75.75 0 0 1 .75.75v.998a.75.75 0 0 1-.75.75h-4.502ZM12 18v.001m0-.001-4.502-.001a.75.75 0 0 1-.75-.75v-.998a.75.75 0 0 1 .75-.75h4.502Z" />
              </svg>
            </div>

            <h3 className="text-xl text-sky-900 font-semibold mb-2">Barang Mahal </h3> 
            <p className="text-sky-600 text-sm mb-4">
            INi Deskripsinya
            </p>
            <a href="#" className="text-white bg-sky-700 shadow-lg shadow-cyan-500/50 rounded-full px-5 py-3 font-semibold hover:underline mt-10">
              View Detail
            </a>
          </div>
        </div>
    </div>

    </div>
  );
}

const ServiceCard = ({ icon: Icon, title, description, link, iconBgColor, iconTextColor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-sky-500">
      <div className="flex flex-col items-center mb-4">
        <div className={`p-6 rounded-full mb-4 ${iconBgColor}`}>
        {Icon && <Icon className={`w-16 h-16 ${iconTextColor}`}/>}
        </div>
        <h3 className="text-xl font-semibold text-sky-600 text-center mb-2">{title}</h3>
      </div>
      <p className="text-sky-600 text-center mb-6">{description}
    </p>
      <div className="text-center">
        <a
         href={link}
         className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
         >
         View More
       </a>
      </div>
    </div>
  );
};
