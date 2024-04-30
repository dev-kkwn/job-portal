import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { TiGroupOutline } from "react-icons/ti";
import { SlLocationPin } from "react-icons/sl";
import { BsBarChart } from "react-icons/bs";

function Day() {
  return (
    <div>
      <div className="">
        <div className=" flex justify-center mb-9 mt-10">
          <p className=" text-pink-800 text-xl">
            <LuLayoutDashboard />
          </p>
          <p className=" text-pink-800 font-bold -mt-1 ml-2 text-xl">
            Dashboard
          </p>
        </div>
        {/* box */}
        <div className="flex">
          <div className="ml-20 bg-blue-500 w-60 h-24  text-2xl text-white p-3 rounded-2xl cursor-pointer">
            <div className=" flex font-bold mt-1">
              {" "}
              <p>5000</p>
              <p className="mt-1 text-2xl">
                <GoPlus />
              </p>{" "}
            </div>
            <p className=" text-xl">Candidates</p>
          </div>

          <div className="ml-8 bg-emerald-700 w-60 h-24  text-2xl text-white p-3 rounded-2xl cursor-pointer ">
            <p className="font-bold mt-1">500</p>
            <p className=" text-xl">Saved Candidates</p>
          </div>

          <div className="ml-8   bg-red-400 w-60 h-24  text-2xl text-white p-3 rounded-2xl cursor-pointer">
            <p className="font-bold mt-1">10</p>
            <p className=" text-xl">Job Post</p>
          </div>

          <div className="ml-8  bg-slate-600 w-60 h-24  text-2xl text-white p-3 rounded-2xl cursor-pointer">
            <p className="font-bold mt-1">10</p>
            <p className=" text-xl">Notifications</p>
          </div>
        </div>
        {/* second box */}
        <div className=" flex justify-between mt-10 mb-10">
          <div className="ml-20  bg-emerald-400  w-1/2 h-24  text-2xl text-white p-3 rounded-2xl cursor-pointer">
            <p className="font-bold mt-1 mb-1 text-3xl">
              <TiGroupOutline />
            </p>
            <p className=" text-xl">Mange Recruiter</p>
          </div>

          <div className="  bg-purple-500 w-1/2 ml-8 h-24  text-2xl text-white p-3 rounded-2xl cursor-pointer">
            <p className="font-bold mt-1 mb-1 text-3xl">
              <SlLocationPin />
            </p>
            <p className=" text-xl">Mange Recruiter</p>
          </div>
        </div>

        <div className=" flex ml-20">
          <p className=" text-2xl">
            <BsBarChart />
          </p>
          <p className=" text-xl ml-2">Application</p>
        </div>

        <div className="flex ml-20">
          <p className="text-2xl">
            <BsBarChart />
          </p>
          <p className="text-xl ml-2">Application</p>
        </div>
      </div>
    </div>
  );
}

export default Day;
