import Image from "next/image";
import React from "react";
export default function Product() {
  const products = [
    {
      id: 1,
      title: "Mexico Burger",
      category: "fixing",
      price: "200.00",
      imageUrl: "/card2.png",
      bgColor: "bg-lime-400",
    },
    {
      id: 2,
      title: "Classic Burger",
      category: "fixing",
      price: "300.00",
      imageUrl:"/card3.png",
      bgColor: "bg-sky-400",
    },
    {
      id: 3,
      title: "Spicy Burger",
      category: "delight",
      price: "450.00",
      imageUrl: "/card1.png",
      bgColor: "bg-amber-400",
    },
  ];


  return (
    <div className="p-1 flex flex-wrap items-center justify-center gap-6 mb-6">

      {products.map((product) => (
        <div
          key={product.id}
          className={`flex flex-col shrink-0 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="162"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              height="152"
              width="162"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
          </svg>
  
          <div className="relative pt-10 px-10 flex i  tems-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-40 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(circle, transparent 50%)",
                transform: "rotate(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <Image
              src={product.imageUrl}
              className="relative w-50"
              width={700}
              height={600}
              alt="card 1"
            />
          </div>
  
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>
  
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">{product.title}</span>
              <span
                className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none items-center"
              >
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}