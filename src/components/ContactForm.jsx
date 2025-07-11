'use client'

export default function ContactForm() {
  return (
    <section className="w-full px-6 py-12 bg-white flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
      {/* Kiri */}
      <div className="bg-sky-500 rounded-xl p-8 text-white w-full wd:w-1/2 shadow-lg">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="text-4xl">💬</div>
          <h2 className="text-2xl font-bold">Chat with Live!</h2>
          <p className="text-sm">
          Jangan malu malu! kalau ada pertanyaan tentang barang atau informasi lebih lanjut, tekan tombol dan anda mendapatkan informasi yang anda inginkan
          </p>
          <button className="mt-4 bg-white text-sky-500 px-6 py-2 rounded-full font-semibold hover:bg-sky-500 transition">
            Let's Chat
          </button>
        </div>
      </div>

      {/* Kanan */}
      <div className="w-full md:w-1/2">
        <span className="text-sm text-sky-500 font-semibold">📍 Contact Us!</span>
        <h2 className="text-3xl font-bold text-sky-700 mt-2 mb-6">
          <span className="text-sky-500">React</span> & Get in Touch with us!
        </h2>

        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Your Name" className="w-full text-sky-700 px-4 py-2 border border-sky-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="email" placeholder="Your Email" className="w-full text-sky-700 px-4 py-2 border border-sky-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>

          <div className="flex flex-row md:flex-row gap-4">
            <input type="text" placeholder="Your Number" className="w-full text-sky-700 px-4 py-2 border border-sky-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"/>
            <input type="text" placeholder="Your Subject" className="w-full text-sky-700 px-4 py-2 border border-sky-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>

          <textarea placeholder="Enter Message" className="w-full text-sky-700 input-style h-32 resize-none border border-sky-300 rounded-md"></textarea>
          <button className="bg-sky-200 text-white px-6 py-3 rounded-lg hover:bg-sky-500 font-semibold transition" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
