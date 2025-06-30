
const navigation = [
  { name: 'Products', href: '#Products'},
  { name: 'About Company', href: '#About'},
  { name: 'Marketplace', href: '#Marketplace'},
  { name: 'Features', href: '#Features'},
];

export default function NavBar() {
  return (
    <nav className="w-full backdrop-blur-sm bg-gradient-to-r from-sky-500/80 via-sky-400/70 to-sky-300/80 px-8 py-5 shadow-md rounded-none flex justify-center">
      <div className="flex gap-x-40">
        {navigation.map((item) => (
            <a key={item.name} href={item.href} 
            className="text-white font-semibold text-sm hover:underline transition duration-150">
              {item.name}
            </a>
        ))}
      </div>
    </nav>
  )
}
