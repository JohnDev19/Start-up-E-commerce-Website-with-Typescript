'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddToCartButton({ product }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const addToCart = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: product.id }),
      })

      if (response.ok) {
        router.push('/cart')
      } else {
        console.error('Failed to add item to cart')
      }
    } catch (error) {
      console.error('Error adding item to cart:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={addToCart}
      disabled={isLoading}
      className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
    >
      {isLoading ? 'Adding...' : 'Add to Cart'}
    </button>
  )
}

