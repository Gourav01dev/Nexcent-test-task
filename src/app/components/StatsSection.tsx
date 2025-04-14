import React from "react";
import Image from "next/image";

interface StatItem {
  number: string;
  label: string;
  image: string;
}

const stats: StatItem[] = [
  { number: "2,245,341", label: "Members", image: "/images/statsSection/Icons-1.svg" },
  { number: "46,328", label: "Clubs", image: "/images/statsSection/Icons-2.svg" },
  { number: "828,867", label: "Event Bookings", image: "/images/statsSection/Icons-3.svg" },
  { number: "1,926,436", label: "Payments", image: "/images/statsSection/Icons-4.svg" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
            Helping a local <br />
            <span className="text-green-600">business reinvent itself</span>
          </h2>
          <p className="text-gray-600">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image
                src={stat.image}
                alt={stat.label}
                width={16}
                height={16}
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800">{stat.number}</h3>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
