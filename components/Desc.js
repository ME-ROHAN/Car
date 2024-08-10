import React from "react";
import Image from "next/image";

const Desc = () => {
  return (
    <div className="mx-24 mt-10 px-5">
      <div className="flex justify-between">
        <div className="text-black w-1/6 ">
          <div className="w-2/3 flex flex-col gap-5">
            <div>
              <h1 className="text-6xl">1964</h1>
              <div className="gradient-line"></div>
            </div>
            <p>
              Highway speed Limits in the UK were introduced after an AC Cobra
              reached 185 mph on mI in 1964
            </p>
          </div>
        </div>

        <div className="text-black w-1/3 flex flex-col justify-center text-8xl ">
          <h1 className="text-center">AC Cobra</h1> <h1> Ford Classic</h1>
        </div>
        <div className="w-1/5 text-black flex justify-end  ">
          <div className=" p-2 w-2/3 h-60 bg-white ">
            <div className="flex flex-col gap-2">
              <img className="" src="/img/l7NqjQRHtLvtrdx.jpg" alt="" />
              <h1 className="text-slate-500 text-end">1/22</h1>
              <h1 className="font-extrabold ml-1">View Gallery</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-16">
        <Image
          src="/img/85f34682d17f4e26c5cf2cf55502859a.jpg"
          height={1000}
          width={1000}
          alt=""
        />
      </div>
    </div>
  );
};

export default Desc;
