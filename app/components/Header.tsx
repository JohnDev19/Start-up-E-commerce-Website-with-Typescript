import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          E-commerce
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-gray-300">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

