import React from "react";

export default function Progressor() {
  return (
    <div className="bg-slate-800  my-6 py-6">
      <div className="flex items-start max-w-screen-lg w-full mx-auto pt-10 pb-10">
        <div className="w-full">
          <div className="flex items-center w-full   ">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base  text-black font-bold ="> 1 </span>
            </div>

            <div className="w-full h-1 mx-4 rounded-lg bg-blue-800"></div>
          </div>
          <div className=" mt-4 mr-4">
            <h6 className="text-base   font-bold text-amber-400">
              Step:1 <br />
              Choose Your Dish
            </h6>
            <p className="text-xs text-white">
              Explore our menu and selected your favorite burger{" "}
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full   ">
            <div className="w-8 h-8 shrink-0 mx-[-1px] justify-center bg-amber-400 p-1.5 flex items-center rounded-full">
              <span className="text-base text-black font-bold ="> 2 </span>
            </div>

            <div className="w-full h-1 mx-4 rounded-lg bg-blue-800"></div>
          </div>
          <div className=" mt-4 mr-4">
            <h6 className="text-base font-bold text-amber-400">
              Step:2 <br /> Customize your order
            </h6>
            <p className="text-xs text-white">
              Tailer your mail to your taste{" "}
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full   ">
            <div className="w-8 h-8 shrink-0 mx-[-1px] justify-center bg-amber-400 p-1.5 flex items-center rounded-full">
              <span className="text-base text-black font-bold ="> 3 </span>
            </div>

            <div className="w-full h-1 mx-4 rounded-lg bg-blue-800"></div>
          </div>
          <div className=" mt-4 mr-4">
            <h6 className="text-base font-bold text-amber-400">
              Step:3 <br />
              Place your order
            </h6>
            <p className="text-xs text-white">
              Ready to eat? Proceed to check out and complete your order!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
