import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <button
      onClick={handleClick}
      className={` relative w-14 h-5 rounded-lg ${
        isOn ? "bg-pink-800" : "bg-gray-500"
      }`}
    >
      <div
        className={`absolute top-0 w-7 h-5 rounded-lg bg-white shadow-md   ${
          isOn ? "translate-x-full" : ""
        }`}
      ></div>
    </button>
  );
}

function Location() {
  return (
    <>
      <div className="w-full pr-4">
        <div className="flex justify-center ">
          <div className=" w-11/12 flex pt-8  justify-between">
            <h1 className="text-pink-800 flex h-6 text-lg">
              <span className="justify-center items-center pe-3 h-7 flex">
                {" "}
                <CiLocationOn />
              </span>{" "}
              Manage Location
            </h1>
            <div className="relative w-full max-w-28 h-7 flex bg-black rounded-sm">
              <button className=" absolute  w-full h-full  flex ps-14 text-center  bg-pink-800  text-white rounded-sm">
                Add
              </button>
              <span className=" absolute bg-black h-7 w-8 flex items-center justify-center text-pink-800 rounded-l-sm">
                <IoIosAddCircleOutline />
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center  pt-8">
          <table className="w-11/12">
            <thead>
              <tr className=" text-white">
                <td className="bg-pink-800 rounded-tl-xl p-4">
                  Location Title
                </td>
                <td className="bg-pink-800">Address</td>
                <td className="bg-pink-800 rounded-tr-xl">Action</td>
              </tr>
              <tr className="">
                <td className="bg-gray-200 rounded-l-xl p-4">UserName</td>
                <td className="bg-gray-200">
                  Iit Madras Research Park Road Taramani,Chennai,Tamilnadu,India{" "}
                </td>
                <td className="bg-gray-200 rounded-r-xl">
                  <p>
                    <FaRegEdit />
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="rounded-l-xl p-4">UserName</td>
                <td className="">
                  Iit Madras Research Park Road Taramani,Chennai,Tamilnadu,India{" "}
                </td>
                <td className="rounded-r-xl">
                  <p>
                    <FaRegEdit />
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="bg-gray-200 rounded-l-xl p-4">UserName</td>
                <td className="bg-gray-200">
                  Iit Madras Research Park Road Taramani,Chennai,Tamilnadu,India{" "}
                </td>
                <td className="bg-gray-200 rounded-r-xl">
                  <p>
                    <FaRegEdit />
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="rounded-l-xl p-4">UserName</td>
                <td className="">
                  Iit Madras Research Park Road Taramani,Chennai,Tamilnadu,India{" "}
                </td>
                <td className="rounded-r-xl">
                  <p>
                    <FaRegEdit />
                  </p>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}
export default Location;
