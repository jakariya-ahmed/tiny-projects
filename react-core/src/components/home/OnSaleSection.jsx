import { useState, useEffect } from "react";

export default function OnSaleSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set flash sale end date
  const saleEndDate = new Date();
  saleEndDate.setDate(saleEndDate.getDate() + 3); // 3 days from now

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = saleEndDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-gray-100 rounded-xl">
      {/* Left side */}
      <div className="flex flex-col justify-center gap-4">
        <h2 className="text-3xl font-bold text-gray-800">On Sale Now!</h2>
        <p className="text-gray-600">Limited time flash sale. Grab your favorite products!</p>

        {/* Countdown */}
        <div className="flex gap-3 text-center font-medium mt-4">
          <div className="bg-white px-4 py-2 rounded shadow">
            <span className="text-xl">{timeLeft.days}</span>
            <p className="text-sm text-gray-500">Days</p>
          </div>
          <div className="bg-white px-4 py-2 rounded shadow">
            <span className="text-xl">{timeLeft.hours}</span>
            <p className="text-sm text-gray-500">Hours</p>
          </div>
          <div className="bg-white px-4 py-2 rounded shadow">
            <span className="text-xl">{timeLeft.minutes}</span>
            <p className="text-sm text-gray-500">Minutes</p>
          </div>
          <div className="bg-white px-4 py-2 rounded shadow">
            <span className="text-xl">{timeLeft.seconds}</span>
            <p className="text-sm text-gray-500">Seconds</p>
          </div>
        </div>

        <button className="mt-6 w-40 bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-700 transition">
          Shop Now
        </button>
      </div>

      {/* Right side */}
      <div className="relative">
        <img
          src="public/images/slider/ads.png"
          alt="Flash Sale Banner"
          className="w-full h-80 object-cover rounded-xl shadow-lg"
        />
        {/* <div className="absolute bottom-4 left-4 bg-violet-600 text-white px-4 py-2 rounded-lg font-bold">
          Flash Sale!
        </div> */}
      </div>
    </section>
  );
}
