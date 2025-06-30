export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-wide">PT MULEJATI JAYA</h2>
            <p className="text-sm text-blue-200 mt-1">Indonesian product, Global Reach</p>
          </div>

        {/* Navigation */}
          <div className="flex gap-6 text-sm text-blue-200">
            <a href="#Products" className="hover:text-white">Products</a>
            <a href="#About" className="hover:text-white">About</a>
            <a href="#Marketplace" className="hover:text-white">Marketplace</a>
            <a href="#Features" className="hover:text-white">Features</a>
          </div>
        </div>

        {/* Bottom Bar */}
          <div className="mt-8 border-blue-600 pt-4 text-center text-xs text-blue-300">
            &copy; {new Date().getFullYear()} PT MULEJATI JAYA. All Right Reserved.
        </div>
      </div>
    </footer>
  );
}
