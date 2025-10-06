import { useLocation, Link } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const { name, total } = location.state || { name: "Customer", total: 0 };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="bg-green-100 p-6 rounded-full mb-4">
        ✅
      </div>
      <h2 className="text-2xl font-bold mb-2">Thank you, {name}!</h2>
      <p className="text-gray-600 mb-4">
        Your order has been placed successfully.  
        Total Paid: <span className="font-bold">${total.toFixed(2)}</span>
      </p>
      <Link
        to="/"
        className="bg-violet-600 text-white px-6 py-2 rounded-lg font-medium"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
