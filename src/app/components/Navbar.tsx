import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
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
              <li>
                <Link href="#" className="text-xs">Home</Link>
              </li>
              <li>
                <Link href="#" className="text-xs">Features</Link>
              </li>
              <li>
                <Link href="#" className="text-xs">Community</Link>
              </li>
              <li>
                <Link href="#" className="text-xs">Blog</Link>
              </li>
              <li>
                <Link href="#" className="text-xs">Pricing</Link>
              </li>
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
