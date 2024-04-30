import React, { useState } from "react";
import { MdGroups2 } from "react-icons/md";
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

function Recruit() {
  return (
    <>
      <div className="w-full pr-4">
        <div className="flex justify-center">
          <div className=" w-11/12 flex pt-8  justify-between">
            {/* <span></span> */}
            <h1 className="text-pink-800 flex h-6 text-lg">
              <span className="justify-center items-center pe-3 h-7 flex">
                {" "}
                <MdGroups2 />
              </span>{" "}
              Manage Recruiter
            </h1>
            <div className="relative w-full max-w-28 h-7 flex bg-black rounded-sm">
              <h1 className=" absolute  w-full h-full  flex ps-14 text-center  bg-pink-800  text-white rounded-sm">
                Add
              </h1>

              <span className=" absolute bg-black h-7 w-8 flex items-center justify-center text-pink-800 rounded-l-sm">
                <IoIosAddCircleOutline />
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center  pt-8">
          {/* <span></span> */}
          <table className="w-11/12">
            <thead>
              <tr className=" text-white">
                <td className="bg-pink-800 p-4 rounded-tl-xl">Recruiter</td>
                <td className=" bg-pink-800 p-4">Mobile Number</td>
                <td className=" bg-pink-800 p-4">Email ID</td>
                <td className="bg-pink-800 p-4">Last Seen</td>
                <td className=" bg-pink-800 p-4">Location</td>
                <td className=" bg-pink-800 rounded-tr-xl p-4">Action</td>
              </tr>
              <tr className="">
                <td className="bg-gray-200 rounded-l-xl p-4">UserName</td>
                <td className="bg-gray-200 p-4 p-4">7539935488</td>
                <td className="bg-gray-200 p-4">Username123@gmail.com</td>
                <td className="bg-gray-200 p-4">2hr ago</td>
                <td className="bg-gray-200 p-4">Chennai </td>
                <td className="   bg-gray-200 rounded-r-xl p-4">
                  <p className="flex justify-between items-center">
                    {" "}
                    <ToggleButton />
                    <FaRegEdit />
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="rounded-l-xl p-4">UserName</td>
                <td className=" p-4">7539935488</td>
                <td className=" p-4">Username123@gmail.com</td>
                <td className=" p-4">2hr ago</td>
                <td className=" p-4">Chennai</td>
                <td className="rounded-r-xl p-4">
                  <p className="flex justify-between items-center">
                    {" "}
                    <ToggleButton />
                    <FaRegEdit />
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="bg-gray-200 rounded-l-xl p-4">UserName</td>
                <td className="bg-gray-200 p-4 p-4">7539935488</td>
                <td className="bg-gray-200 p-4 text-start">
                  Username123@gmail.com
                </td>
                <td className="bg-gray-200 p-4">2hr ago</td>
                <td className="bg-gray-200 p-4">Chennai </td>
                <td className="   bg-gray-200 rounded-r-xl p-4">
                  <p className="flex justify-between items-center">
                    {" "}
                    <ToggleButton />
                    <FaRegEdit />
                  </p>
                </td>
              </tr>
              <tr className="">
                <td className="rounded-l-xl p-4">UserName</td>
                <td className=" p-4">7539935488</td>
                <td className=" p-4">Username123@gmail.com</td>
                <td className=" p-4">2hr ago</td>
                <td className=" p-4">Chennai </td>
                <td className="rounded-r-xl p-4">
                  <p className="flex justify-between items-center">
                    {" "}
                    <ToggleButton />
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
export default Recruit;
