import React from "react";
import { GiHamburger } from "react-icons/gi";
import { FcSearch } from "react-icons/fc";
import { FaBolt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import One from "../../../public/one.jpg";
export default function Nav() {
  return (
    <div className="bg-gray-800">
      <div className="gird xl:grid-cols-1 grid-cols-1 ">
        <div className="p-3 ">
          <div className="py-2 px-3 rounded-xl border w-full bg-gradient-to-br to-gray-500 from-gray-700">
            <div className="flex justify-between items-center ">
              <div className="flex justify-center item-center gap-2 ">
                {/*logo burger*/}
                <div className="flex items-center">
                  <GiHamburger className="text-yellow-400  hover:text-yellow-500 w-7 h-7 " />
                </div>
                {/*Search Icon*/}
                <div style={{ position: "relative" }}>
                  <input
                    placeholder="Search from Here "
                    className=" border  rounded-3xl py-2 px-3 outline-none text-sm w-[350px] pr-10  hidden lg:block md-block "
                  />
                  <FcSearch className="w-5  cursor-pointer h-5 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block  " />{" "}
                </div>
              </div>

              {/*icon*/}
              <div className="flex justify-center item-center gap-8 ">
                <FaBolt className=" w-8 h-8 hidden text-yellow-400 hover:text-yellow-500 lg:block md:block  " />
                <p className="text-sm text-white hidden lg:block md:block">
                  Order now and get it with in
                </p>
                <span className="text-amber-500 font-bold hidden lg:block md:block">
                  15 minute
                </span>

                {/*Card icon*/}
                <FaShoppingCart className="inline-block w-8 h-8 rounded-md  text-sky-400 hover:text-amber-500 ring-2 ring-blue-800" />
                <Image
                  src={One}
                  alt="hamza"
                  className=" inline-block w-8 h-8 rounded-full ring-2 ring-sky-500 "
                  width={700}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
