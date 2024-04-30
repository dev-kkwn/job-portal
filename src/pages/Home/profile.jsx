import React from "react";
import { CgProfile } from "react-icons/cg";
import profile from "/src/assets/profile.jpg";
import { IoAddOutline } from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function Profile() {
  return (
    <div className="w-full">
      <div className="flex w-full justify-end pr-8 ">
        <div className="flex items-center w-[50%]">
          <div className="text-2xl text-pink-800">
            <CgProfile />
          </div>
          <div>
            <p className="text-2xl text-pink-800 mb-1 mx-1">Profile</p>
          </div>
        </div>
        <div className="bg-pink-800 flex items-center my-4">
          <div className="bg-black text-white text-2xl py-1">
            <IoAddOutline />
          </div>
          <p className="text-white text-lg px-1">ADD</p>
        </div>
      </div>

      <div className="bg-gray-300 p-5">
        <div className="p-5 bg-slate-100 rounded-xl cursor-pointer relative flex items-center mb-4">
          <img
            src={profile}
            alt="Profile Image"
            className="rounded-full w-36 h-36"
          />
          <div className="bg-pink-800 text-sm rounded-full flex justify-center items-center w-7 h-7 absolute top-[140px] left-32">
            <SlNote className="text-white font-bold" />
          </div>

          <div className="w-full px-5">
            <div className="username pb-3">
              <p className="text-3xl">USER NAME</p>
            </div>
            <div className="content flex justify-between w-full p-5 border-gray-500 border-t-2">
              <div className="w-1/2 text-xl border-gray-500 border-r-2">
                <div className="flex items-center">
                  <IoMdCall />
                  <p className="">9888666123</p>
                </div>
                <div className="flex items-center">
                  <IoIosMail />
                  <p className="">user@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <FaLocationDot />
                  <p className="">Chennai</p>
                </div>
              </div>
              <div className="w-full text-xl items-center flex flex-col justify-center">
                <p className="text-gray-400 font-medium">
                  Jobs You Ware Interested In
                </p>
                <p className="font-semibold">VOICE JOBS, NON - VOICE JOBS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="p-5 ml-0 mr-5 bg-slate-100 rounded-xl relative w-1/2">
            <div className="flex justify-between w-full items-center">
              <p className="text-xl font-semibold">Profile</p>
              <SlNote className="text-lg font-extrabold cursor-pointer" />
            </div>

            <div className="grid grid-cols-2 mt-4 gap-5 justify-between w-full flex-wrap items-center">
              <div className="w-1/2">
                <p className="text-gray-400 font-medium">DOB</p>
                <p className="font-semibold">03-04-2000</p>
              </div>
              <div className="">
                <p className="text-gray-400 font-medium">Gender</p>
                <p className="font-semibold">Male</p>
              </div>
              <div className="W-1/2">
                <p className="text-gray-400 font-medium">City</p>
                <p className="font-semibold">Chennai</p>
              </div>
              <div className="">
                <p className="text-gray-400 font-medium">State</p>
                <p className="font-semibold">Tamil Nadu</p>
              </div>
              <div className="w-1/2">
                <p className="text-gray-400 font-medium">Pincode</p>
                <p className="font-semibold">600112</p>
              </div>
              <div className="">
                <p className="text-gray-400 font-medium">Language</p>
                <p className="font-semibold">English, Tamil, Telugu</p>
              </div>
            </div>
          </div>

          <div className="p-5 mr-0 ml-5 bg-slate-100 rounded-xl relative  w-1/2">
            <div className="flex justify-between w-full items-center">
              <p className="text-xl font-medium">Education Details</p>
              <p className="text-lg font-medium cursor-pointer"><u>Add</u></p>
            </div>
            <div className="flex mt-3 justify-between w-full items-center">
              <p className="text-lg font-normal">Graduation/Diploma</p>
              <SlNote className="text-lg font-extrabold cursor-pointer" />
            </div>

            <div className="grid grid-cols-2 mt-4 gap-5 justify-between w-full flex-wrap items-center">
              <div className="w-1/2">
                <p className="text-gray-400 font-medium">Course</p>
                <p className="font-semibold">BE</p>
              </div>
              <div className="">
                <p className="text-gray-400 font-medium">Specialization</p>
                <p className="font-semibold">EEE</p>
              </div>
              <div className="W-1/2">
                <p className="text-gray-400 font-medium">Education Type</p>
                <p className="font-semibold">Full Time</p>
              </div>
              <div className="">
                <p className="text-gray-400 font-medium">Duration</p>
                <p className="font-semibold">2017-2021</p>
              </div>
              <div className="w-1/2">
                <p className="text-gray-400 font-medium">Percentage</p>
                <p className="font-semibold">90%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Profile;
