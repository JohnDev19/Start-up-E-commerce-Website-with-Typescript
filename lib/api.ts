export async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

export async function getProduct(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?id=${id}`)
  if (!res.ok) throw new Error('Failed to fetch product')
  return res.json()
}

export async function getCart() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart`)
  if (!res.ok) throw new Error('Failed to fetch cart')
  return res.json()
}

