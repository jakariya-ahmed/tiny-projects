import { Mail } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SubscribeCom() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Simple email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      toast.error("Please enter a valid email address!");
      return;
    }

    toast.success("🎉 Subscription successful! Check your inbox for a discount coupon.");
    setEmail(""); // Reset input field
  };

  return (
    <section className="bg-gray-100 py-12 relative">
      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-3xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-2">Subscribe Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Get <span className="text-amber-500 font-semibold">20% Off Discount Coupon</span>
          <br />
          by Subscribe our Newsletter
        </p>

        {/* Subscribe Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex items-center justify-center max-w-xl mx-auto rounded-full overflow-hidden shadow-md"
        >
          {/* Left Icon + Input */}
          <div className="flex items-center bg-white px-4 flex-1">
            <Mail className="text-gray-400 mr-2" size={20} />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 text-sm outline-none text-gray-700 placeholder-gray-400"
              required
            />
          </div>

          {/* Subscribe Button */}
          <button
            type="submit"
            className="bg-amber-500 text-white px-6 py-3 font-medium hover:bg-amber-600 transition-colors outline-none duration-300"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}
