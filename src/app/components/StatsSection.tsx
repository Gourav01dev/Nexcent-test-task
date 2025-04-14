"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { formatNumber, stats } from "../utils/helper";
import { StatItem } from "../utils/interface";

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  const targetNumbers = stats.map((stat) =>
    parseInt(stat.number.replace(/,/g, ""))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const frameDuration = 16;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const timerId = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easedProgress = 1 - Math.pow(1 - progress, 3); // ease-out

      const newCounters = targetNumbers.map((target) =>
        Math.floor(target * easedProgress)
      );

      setCounters(newCounters);

      if (frame === totalFrames) {
        clearInterval(timerId);
        setCounters(targetNumbers);
      }
    }, frameDuration);

    return () => clearInterval(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 px-6 bg-gray-50">
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
        <div className="flex flex-wrap gap-x-8 gap-y-8">
          {stats.map((stat: StatItem, index: number) => (
            <div
              key={index}
              className="flex items-center gap-4 w-full md:w-[calc(50%-1rem)]"
            >
              <Image
                src={stat?.image}
                alt={stat.label}
                width={16}
                height={16}
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {formatNumber(counters[index])}
                </h3>
                <p className="text-sm font-medium text-gray-500">
                  {stat?.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
