import { Truck, RefreshCcw, ShieldCheck, Award } from "lucide-react";

export default function ServiceHighlightsCom() {
  const services = [
    {
      id: 1,
      icon: <Truck className="w-8 h-8 text-amber-600" />,
      title: "Free Shipping",
      desc: "When ordering over $100",
    },
    {
      id: 2,
      icon: <RefreshCcw className="w-8 h-8 text-amber-600" />,
      title: "Free Return",
      desc: "Get return within 30 days",
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
      title: "Secure Payment",
      desc: "100% secure online payment",
    },
    {
      id: 4,
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: "Best Quality",
      desc: "Original product guaranteed",
    },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex-shrink-0">{service.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
