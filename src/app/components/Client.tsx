import React from "react";
import Image from "next/image";
import { clientImages } from "../utils/helper";

const Clients: React.FC = () => {
  return (
    <div className="py-7 gap-3 bg-white text-center justify-center">
      <h3 className="text-gray-800 text-xl font-semibold mb-1">Our Clients</h3>
      <p className="text-gray-600 mb-3">
        We have been working with the world’s leading organizations
      </p>

      <div className="flex justify-between px-2   max-w-[801px] w-full h-16 mx-auto">
        {clientImages.map((image:string, index:number) => (
          <div key={index} className="flex items-center justify-center py-5">
            <Image
              src={image}
              alt={`Client ${index + 1}`}
              width={34}
              height={34}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
