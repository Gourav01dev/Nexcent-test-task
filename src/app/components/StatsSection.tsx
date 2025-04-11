import React from "react";

interface StatItem {
  number: string;
  label: string;
}

const stats: StatItem[] = [
  { number: "2,245,341", label: "Members" },
  { number: "46,328", label: "Clubs" },
  { number: "828,867", label: "Events Booked" },
  { number: "1,926,436", label: "Payments" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Helping a local <br /> business reinvent itself
          </h2>
          <p className="text-gray-600">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-gray-800">{stat.number}</h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
