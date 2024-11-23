import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const orderData = await request.json()
  console.log('Order received:', orderData)

  cart = { items: [] }

  return NextResponse.json({ success: true })
}

