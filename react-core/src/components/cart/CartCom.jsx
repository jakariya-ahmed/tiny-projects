import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

export default function CartCom() {
  const { cart, removeFromCart, updateQty, clearCart } = useCart();
  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = coupon === "SAVE10" ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  return (
    <div className="max-w-5xl mx-auto p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <>
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">Product</th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Total</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="p-2 flex items-center gap-2">
                    <img src={item.thumbnail} alt={item.title} className="w-14 h-14 object-cover rounded" />
                    {item.title}
                  </td>
                  <td className="p-2">TK{item.price.toFixed(2)}</td>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, item.quantity - 1)}
                        className="px-2 py-1 border rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                        className="px-2 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-2">TK{(item.price * item.quantity).toFixed(2)}</td>
                  <td className="p-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Coupon + Checkout */}
          <div className="mt-6 flex flex-col md:flex-row justify-between gap-4">
            <div>
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
                className="border rounded px-3 py-2"
              />
              <button
                onClick={() => setCoupon(coupon)}
                className="ml-2 bg-amber-500 text-white px-4 py-2 rounded"
              >
                Apply
              </button>
            </div>

            <div className="text-right">
              <p>Subtotal: <strong>TK{subtotal.toFixed(2)}</strong></p>
              <p>Discount: <strong>TK{discount.toFixed(2)}</strong></p>
              <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
              <button
                onClick={() => navigate("/checkout")}
                className="mt-3 bg-amber-500 text-white px-6 py-2 rounded"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
