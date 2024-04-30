import React from "react";
import { PiNumberCircleThreeBold } from "react-icons/pi";

function Otp() {
  return (
    <>
      <div className="bg-pink-800 h-screen flex justify-center items-center ">
        <div className="md:flex md:justify-around md:w-full">
         <div className="">
         <div className="flex justify-center items-center  text-white text-6xl md:text-9xl">
            <p>
              <PiNumberCircleThreeBold />
            </p>
          </div>
          <div className="flex justify-center  md:items-center ">
            <p className="text-center text-white font-bold text-2xl md:text-6xl">
              DAY JOBS
            </p>
          </div>
         </div>
          <div className="bg-white m-2 rounded-2xl h-60 pt-5 md:w-[500px] md:h-[250px] md:pt-8">
            <p className="text-center text-lg font-medium md:text-3xl">
              Welcome To 3 days Jobs
            </p>
            <p className="text-center text-xs md:text-base text-gray-700">
             Enter OTP To Verify Your Account:
            </p>
            <form action="" className="pt-5 md:pt-6 md:flex md:items-center md:justify-center">
              <label htmlFor="" className="text-sm font-medium ms-5  md:text-lg">
                OTP:
              </label>
              <br />
              <input
                type="text"
                className="border-2 w-72 rounded text-sm p-2 ms-2 me-2 md:w-56 outline-none md:flex md:justify-center md:text-base"
                placeholder="Enter Your OTP"
              />
            </form>
            <div className="flex justify-center pt-6">
              <button className="bg-pink-800 rounded-lg w-28 p-1 md:p-2 md:flex md:items-center md:justify-center text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Otp;
