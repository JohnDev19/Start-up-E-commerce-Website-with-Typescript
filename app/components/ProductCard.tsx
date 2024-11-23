import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <Link
          href={`/product/${product.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

