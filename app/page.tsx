import { getProducts } from '../lib/api'
import ProductCard from './components/ProductCard'

export default async function Home() {
  const products = await getProducts()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

