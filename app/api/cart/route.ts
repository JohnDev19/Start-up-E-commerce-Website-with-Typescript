import { NextResponse } from 'next/server'

let cart = {
  items: [],
}

export async function GET() {
  return NextResponse.json(cart)
}

export async function POST(request: Request) {
  const { productId } = await request.json()
  const existingItem = cart.items.find(item => item.product.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?id=${productId}`).then(res => res.json())
    cart.items.push({ product, quantity: 1 })
  }

  return NextResponse.json(cart)
}

export async function PUT(request: Request) {
  const { productId, quantity } = await request.json()
  const item = cart.items.find(item => item.product.id === productId)

  if (item) {
    item.quantity = quantity
    if (item.quantity <= 0) {
      cart.items = cart.items.filter(item => item.product.id !== productId)
    }
  }

  return NextResponse.json(cart)
}

