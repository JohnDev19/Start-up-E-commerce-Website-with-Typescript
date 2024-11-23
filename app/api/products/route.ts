import { NextResponse } from 'next/server'

const products = [
  { id: 1, name: 'Product 1', price: 19.99, description: 'This is product 1', image: '/placeholder.svg?height=300&width=300' },
  { id: 2, name: 'Product 2', price: 29.99, description: 'This is product 2', image: '/placeholder.svg?height=300&width=300' },
  { id: 3, name: 'Product 3', price: 39.99, description: 'This is product 3', image: '/placeholder.svg?height=300&width=300' },
]

export async function GET() {
  return NextResponse.json(products)
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (id) {
    const product = products.find(p => p.id === parseInt(id))
    if (product) {
      return NextResponse.json(product)
    }
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  return NextResponse.json(products)
}

