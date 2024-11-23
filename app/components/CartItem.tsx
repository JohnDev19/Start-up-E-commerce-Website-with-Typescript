'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function CartItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity)

  const updateQuantity = async (newQuantity) => {
    try {
      const response = await fetch('/api/cart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: item.product.id, quantity: newQuantity }),
      })

      if (response.ok) {
        setQuantity(newQuantity)
      } else {
        console.error('Failed to update cart')
      }
    } catch (error) {
      console.error('Error updating cart:', error)
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <Image
        src={item.product.image}
        alt={item.product.name}
        width={80}
        height={80}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{item.product.name}</h3>
        <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQuantity(quantity - 1)}
          disabled={quantity <= 1}
          className="bg-gray-200 px-2 py-1 rounded"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => updateQuantity(quantity + 1)}
          className="bg-gray-200 px-2 py-1 rounded"
        >
          +
        </button>
      </div>
    </div>
  )
}

