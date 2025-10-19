import { ArrowRight } from "lucide-react";
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
    <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      {/* Left side */}
      <div className="flex flex-col justify-center pl-10 gap-4 bg-amber-100 h-[320px] sm:h-[200px] lg:h-[320px] bg-cover bg-center overflow-hidden"
      style={{
            backgroundImage:
              "url('public/images/banner/cover-countdown.jpg')",
          }}
      >
        <h2 className="text-4xl font-bold text-gray-800">On Sale Now!</h2>
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

      <button className="group relative mt-6 w-30 cursor-pointer text-amber-500 font-medium">
      <span className="flex items-center justify-center gap-1">
        Shop Now
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>

      {/* Underline animation */}
      <span className="absolute left-0 bottom-[-10px] w-full h-[2px] bg-amber-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
    </button>

      </div>

      {/* Right side */}
      <div className="relative">
        <img
          src="/images/slider/ads.png"
          alt="Flash Sale Banner"
          className="w-full h-80 object-cover"
        />
        {/* <div className="absolute bottom-4 left-4 bg-violet-600 text-white px-4 py-2 rounded-lg font-bold">
          Flash Sale!
        </div> */}
      </div>
    </section>
  );
}
