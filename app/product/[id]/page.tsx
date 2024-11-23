import { getProduct } from '../../../lib/api'
import AddToCartButton from '../../components/AddToCartButton'
import Image from 'next/image'

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  )
}

