import React from "react";
import Image from "next/image";
import { features } from "../utils/helper";
import { FeatureItem } from "../utils/interface";

const Features: React.FC = () => {
  return (
    <div className="px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-2xl font-semibold text-gray-800">
          Manage your entire community <br /> in a single system
        </h2>
        <p className="text-gray-600 font-normal mt-2">
          Who is Nextcent suitable for?
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto mt-10">
        {features.map((feature: FeatureItem, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={feature?.icon}
                alt={feature.title}
                width={60}
                height={60}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature?.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
