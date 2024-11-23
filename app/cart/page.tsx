import { getCart } from '../../lib/api'
import CartItem from '../components/CartItem'
import Link from 'next/link'

export default async function CartPage() {
  const cart = await getCart()

  const total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <Link
              href="/checkout"
              className="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

