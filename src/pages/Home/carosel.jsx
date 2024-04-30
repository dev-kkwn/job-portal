import React from "react";
const img = "src/assets/img-1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiNumberCircleThreeBold } from "react-icons/pi";


function Carousel() {
  return (
    <>
      <div className="bg-pink-800 h-screen md:flex">
        <div className="overflow-y-auto flex no-scrollbar md:w-1/2 md:flex md:justify-center md:items-center">
           <div className="">
           <div className="bg-white rounded-xl flex justify-center items-center h-[420px] w-[280px] m-5 md:m-0 md:w-[500px] md:h-[500px]">
              <div className=" rounded-xl md:w-[280px]">
                <img src={img} alt="" className="" />
                <h1 className="text-center mt-8 ps-5 pe-5">
                  Within 24hrs you will get a call from recruiters <span className="md:hidden">1</span>
                </h1>
              </div>
           </div>
            </div>
          <div className="">
            <div className="bg-white rounded-xl flex justify-center items-center h-[420px] w-[280px] m-5 md:h-[280px] md:w-[230px] md:m-2 md:hidden">
              <div className=" rounded-xl">
                <img src={img} alt="" className="" />
                <h1 className="text-center mt-8 ps-5 pe-5">
                  Within 24hrs you will get a call from recruiters 2
                </h1>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-xl flex justify-center items-center h-[420px] w-[280px] m-5  md:h-[280px] md:w-[230px] md:m-2 md:hidden">
              <div className=" rounded-xl">
                <img src={img} alt="" className="" />
                <h1 className="text-center mt-8 ps-5 pe-5">
                  Within 24hrs you will get a call from recruiters 3
                </h1>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-xl flex justify-center items-center h-[420px] w-[280px] m-5  md:h-[280px] md:w-[230px] md:m-2 md:hidden">
              <div className=" rounded-xl">
                <img src={img} alt="" className="" />
                <h1 className="text-center mt-8 ps-5 pe-5">
                  Within 24hrs you will get a call from recruiters 4
                </h1>
              </div>
            </div>
          </div>
        </div>
         <div className="md:w-1/2 md:h-screen md:flex md:justify-center md:items-center">
         <div className="bg-pink-800  justify-center items-center md:w-1/2">
        <div className="hidden md:block">
          <div className="flex justify-center items-center  text-white text-6xl md:text-8xl">
            <p>
              <PiNumberCircleThreeBold />
            </p>
          </div>
          <div>
            <p className="text-center text-white font-bold text-2xl md:text-6xl">
              DAY JOBS
            </p>
          </div>
        </div>
      <div className="flex justify-center md:mt-10">
            <p className="bg-white rounded-2xl md:rounded-3xl p-2 md:p-3 text-pink-800 md:text-xl">
              <FaArrowRightLong />
            </p>
          </div>
      </div>
         </div>
      </div>
    </>
  );
}
export default Carousel;
