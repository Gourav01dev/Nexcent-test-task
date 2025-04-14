"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "../utils/helper";
import { Islide } from "../utils/interface";

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="w-full flex flex-col items-center relative">
      <style jsx global>{`
        .slick-slider {
          overflow: hidden;
        }
        .slick-track {
          margin-left: 0;
          margin-right: 0;
        }
        .slick-slide {
          border: none !important;
        }
        .slick-list {
          border-right: none !important;
        }
        .carousel-dots {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
        }
      `}</style>

      <Slider ref={sliderRef} {...settings} className="max-w-6xl w-full">
        {slides.map((slide:Islide, idx:number) => (
          <div key={idx}>
            <div className="w-full flex flex-col md:flex-row justify-between items-center text-start gap-10">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                  {slide.title} <br />
                  <span className="text-green-600">
                    {slide?.highlightedText}
                  </span>
                </h2>
                <p className="mt-4 text-gray-600">{slide?.description}</p>
                <button className="mt-6 mx-[10px] bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
                  Register
                </button>
              </div>
              <div className="flex-1 flex w-full justify-center items-center md:justify-end">
                <Image
                  src={slide?.image}
                  alt="Illustration"
                  width={272}
                  height={283}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="absolute bottom-[-20px] left-0 right-0 flex justify-center">
        {slides.map((_, idx:number) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-2 h-2 mx-1 rounded-full inline-block ${
              currentSlide === idx ? "bg-green-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
