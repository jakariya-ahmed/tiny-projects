import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

    const {cart, clearCart}= useCart();
    // Form input values
    const [checkoutForm, setCheckoutForm] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        payment: 'cod', // default cash on delivery
    });

    const navigate = useNavigate();
    // Subtotal
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    // console.log(subtotal);
    // ✅ Redirect only if not on order-success page
    useEffect(() => {
        if (cart.length === 0 && location.pathname !== "/order-success") {
        navigate("/shop");
        }
    }, [cart, navigate, location.pathname]);
    // Handle input change
    const handleChange = (e) => {
        setCheckoutForm({...checkoutForm, [e.target.name]:e.target.value});
    }


    // Handle form submit
    const handleCheckout = (e) => {
        e.preventDefault();
        // Fake order placement
        clearCart();
        navigate("/order-success", {state: {
            name: checkoutForm.name, total: subtotal,
        }});

        setTimeout(() => clearCart(), 300); // clear after redirect

    }


return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      <form onSubmit={handleCheckout} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left - Shipping Info */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={checkoutForm.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={checkoutForm.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Mobile</label>
            <input
              type="mobile"
              name="mobile"
              value={checkoutForm.mobile}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            <textarea
              name="address"
              value={checkoutForm.address}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            ></textarea>
          </div>
        </div>

        {/* Right - Order Summary */}
        <div className="space-y-4 bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-semibold text-lg">Order Summary</h3>
          <ul className="divide-y">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between py-2">
                <img src={item.thumbnail} className="w-12 h-12" alt="" />
                <span>{item.title} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p className="text-right font-bold">Total: Tk{subtotal.toFixed(2)}</p>

          {/* Payment */}
          <div>
            <label className="block text-sm font-medium">Payment Method</label>
            <select
              name="payment"
              value={checkoutForm.payment}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-2 rounded-lg font-medium"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}