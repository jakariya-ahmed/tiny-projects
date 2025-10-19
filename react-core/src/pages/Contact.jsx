export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      {/* Header */}
      <div className="max-w-3xl text-center mb-10">
        <h1 className="text-3xl font-bold text-amber-500 mb-3">Contact Us</h1>
        <p className="text-gray-600">
          Have any questions, feedback, or business inquiries?  
          Fill out the form below or reach us directly — we’d love to hear from you.
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-xl shadow-md flex flex-col justify-center space-y-5">
          <h2 className="text-xl font-semibold text-amber-500">Get In Touch</h2>

          <div>
            <p className="text-gray-700 font-medium">📍 Office Address</p>
            <p className="text-gray-600">123 Main Street, Moulvibazar, Bangladesh</p>
          </div>

          <div>
            <p className="text-gray-700 font-medium">📞 Phone</p>
            <p className="text-gray-600">+880 1234 567 890</p>
          </div>

          <div>
            <p className="text-gray-700 font-medium">📧 Email</p>
            <p className="text-gray-600">support@yourstore.com</p>
          </div>

          <div>
            <p className="text-gray-700 font-medium">🕒 Business Hours</p>
            <p className="text-gray-600">Sat - Thu: 9:00 AM – 8:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
