import React from "react";
import { FaSearch } from "react-icons/fa";

const CandidateSearch = () => {
  return (
    <div className="w-full min-h-screen flex">
      {/* <div className="w-[20%] bg-green-400 flex justify-center items-center text-pink-700  text-4xl">
        <FaSearch className=""></FaSearch>
        <p>Search</p>
      </div> */}

      <div className="w-[80%] bg-white flex justify-center items-center">
        <div className="w-3/4">
          <div className="flex items-center justify-center text-2xl text-pink-700">
            <FaSearch className="mr-2 text-xl"></FaSearch>
            <p>Search</p>
          </div>
          <div className="my-4 flex flex-wrap justify-center items-center">
            <label
              htmlFor="Designation/company Name"
              className="w-1/4 max-lg:w-full text-start capitalize md:text-xs lg:text-sm"
            >
              Designation/company Name :{" "}
            </label>
            <input
              type="text"
              className="border border-gray-300 capitalize rounded p-2 max-lg:w-full w-1/2 focus:outline-blue-500"
              placeholder="Enter Designation/company Name"
            />
          </div>
          <div className="my-4 flex flex-wrap justify-center items-center">
            <label
              htmlFor="location"
              className="w-1/4 max-lg:w-full text-start capitalize md:text-xs lg:text-sm"
            >
              location :{" "}
            </label>
            <input
              type="text"
              className="border border-gray-300 capitalize rounded p-2 max-lg:w-full w-1/2 hover:border-blue-500 focus:outline-blue-500"
              placeholder="Enter Your location"
            />
          </div>
          <div className="my-4 flex-wrap flex justify-center items-center">
            <label
              htmlFor="experience"
              className="w-1/4 max-lg:w-full text-start capitalize md:text-xs lg:text-sm"
            >
              experience :{" "}
            </label>
            <input
              type="text"
              className="border border-gray-300 capitalize rounded p-2 max-lg:w-full w-1/2 focus:outline-blue-500"
              placeholder="Enter experience"
            />
          </div>
          <div className="my-6 flex justify-center items-center">
            <button class="bg-pink-700 hover:bg-pink-800 capitalize text-white py-2 px-8 rounded">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSearch;
