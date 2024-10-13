import Image from "next/image";
import React from "react";
import banner from "../../../public/four.png";
export default function Banner() {
  return (
    <div className=" text-white relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 my-10">
      <div className="absolute inset-0 opacity-15">
        <Image
          className="w-full h-full object-cover"
          src={banner}
          alt="banner"
        />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:tet-6xl font-bold mb-4">
          Explore Our Menu{" "}
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Buy Now For Exclusive Burger Discount
        </p>

        <button
          type="button"
          className="bg-blue-600 text-white text-sm font-bold py-3 px-6 rounded-full shadow-lg hover:bg-red-700 transition duration-300"
        >
          Exiting Deal Launched at 10pm
        </button>
      </div>
    </div>
  );
}
