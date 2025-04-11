import Image from "next/image";
import React from "react";
import Clients from "../components/Client";
import Features from "../components/Features";
import Common from "../components/Common";
import StatsSection from "../components/StatsSection";
import BlogCards from "../components/BlogCards";
import TestimonialSection from "../components/TestimonialSection";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="px-6 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto w-full flex justify-between text-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
              Lessons and insights <br />
              <span className="text-green-600">from 8 years</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Where to grow your business as a photographer: site or social media?
            </p>
            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
              Register
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/Illustration.png"
              alt="Image"
              width={272.16}
              height={283.3}
            />
          </div>
        </div>
      </div>
      <Clients />
      <Features />
      <Common
        imageSrc="/images/common/rafiki.svg"
        title="The unseen of spending three years at Pixelgrade"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta."
        buttonText="Learn More"
      />
      <StatsSection />
      <Common
        imageSrc="/images/common/pana.svg"
        title="How to design your site footer like we did"
        description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
        buttonText="Learn More"
      />
      <TestimonialSection/>
      <BlogCards/>
    </>
  );
};

export default Dashboard;
