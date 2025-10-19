import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold text-amber-500 mb-3">About Us</h1>
        <p className="text-gray-600">
          Welcome to <span className="font-semibold text-gray-900">YourStore</span> — where style meets quality.
          We are committed to providing premium products at affordable prices, ensuring every customer enjoys a seamless shopping experience.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-6">
        {/* Image */}
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src="/about.avif"
            alt="About us"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded in 2020, <span className="font-semibold text-gray-900">YourStore</span> began with a simple vision —
            to make high-quality and trendy products accessible to everyone.  
            What started as a small online shop has now grown into one of the most trusted eCommerce brands.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our dedicated team works passionately to bring the best products, latest trends, and unbeatable offers right to your fingertips.
            Customer satisfaction and trust are at the heart of everything we do.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          To deliver top-notch products and exceptional customer service that bring joy, confidence, and value to our customers' everyday lives.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-3xl font-bold text-amber-500">10K+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-3xl font-bold text-amber-500">5+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-3xl font-bold text-amber-500">500+</h3>
            <p className="text-gray-600">Products Delivered</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-3xl font-bold text-amber-500">100%</h3>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Vision / CTA Section */}
      <div className="max-w-5xl mx-auto mt-16 bg-amber-50 border border-amber-100 rounded-xl p-8 text-center shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Vision</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          We believe eCommerce is not just about shopping — it's about creating meaningful connections between customers and brands they trust.
        </p>
        <Link to="/shop">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-lg transition">
            Explore Our Products
            </button>
        </Link>
      </div>
    </div>
  );
}
