import Image from "next/image";
import React from "react";

const partnerLogos = [
  "/images/partners/logo.svg",
  "/images/clients/client-2.svg",
  "/images/clients/client-3.svg",
  "/images/clients/client-4.svg",
  "/images/clients/client-5.svg",
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0 w-[280px]">
          <Image
            src="/images/partners/tesla-icon.svg"
            alt="Tesla"
            width={140}
            height={140}
            className="rounded-lg !w-full"
          />
        </div>
        <div>
          <p className="text-gray-600 mb-4">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <h4 className="text-green-600 font-semibold">Tim Smith</h4>
          <p className="text-gray-400 mb-6">
            British Dragon Boat Racing Association
          </p>
          <div className="flex flex-wrap justify-between items-center gap-6 mb-4">
            {partnerLogos.map((logo, index) => (
              <Image key={index} src={logo} alt={`Partner ${index + 1}`} width={40} height={40} />
            ))}
            <a
            href="#"
            className="text-green-600 font-semibold hover:underline text-sm"
          >
            Meet all customers →
          </a>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
