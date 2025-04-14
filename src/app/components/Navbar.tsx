"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "../utils/helper";
import { IRoute } from "../utils/interface";

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleNavClick = (itemName: string) => {
    setActiveItem(itemName);
  };
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between text-start w-full max-md:flex-wrap">
        <div className="flex items-center justify-between text-2xl font-bold text-green-600">
          <Image src="/images/Icon.svg" alt="Image" width="30" height="20" />
          Nexcent
        </div>

        <div className="flex justify-between gap-3 max-md:flex-wrap">
          <div className="flex items-center justify-between">
            <ul className="flex gap-3 lg:gap-6 text-gray-700 font-medium">
              {navItems.map((item: IRoute) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`${
                      activeItem === item.name
                        ? "text-white font-bold bg-green-600 p-2 rounded-md"
                        : "text-gray-700 hover:text-gray-900"
                    } transition-colors duration-200`}
                    onClick={() => handleNavClick(item.name)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:pl-6">
            <button className="block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Register Now →
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
