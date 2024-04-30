import React, { useState } from "react";
import Select from "react-select";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const candidates = [
    { value: "person 1", label: "person 1" },
    { value: "person 2", label: "person 2" },
    { value: "Others", label: "Others" },
  ];
  const genders = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];
  const noticeperiod = [
    { value: "immediately", label: "immediately" },
    { value: "15 days", label: "15 days" },
    { value: "30 days", label: "30 days" },
    { value: ">30 days", label: ">30 days" },
  ];

  const [SearchDetails, SetSearchDetails] = useState({
    candidate_search: "",
    key_skills: "",
    salary: "",
    language: "",
    experience: "",
    education: "",
    location: "",
    gender: "",
    notice_period: "",
  });

  const handleChange = (e) => {
    SetSearchDetails((prevstate) => ({
      ...prevstate,
      [e.target.name] : e.target.value,
    }));
  };

  return (
    <div className="w-full min-h-screen flex">
      <div className="w-[20%] bg-red-400 flex justify-center items-center text-blue-500  text-4xl">
        <FaSearch className=""></FaSearch>
        <p>Search</p>
      </div>

      <div className="w-[80%] bg-white flex justify-center items-center">
        <div className="w-3/4">
          <div className="flex items-center justify-center text-2xl text-blue-500">
            <FaSearch className="mr-2 text-xl"></FaSearch>
            <p>Search</p>
          </div>
          <div className="my-4 flex flex-wrap justify-center items-center">
            <label
              htmlFor="candidate you searching"
              className="w-1/4 max-lg:w-full text capitalize-start capitalize md:text-xs lg:text-sm"
            >
              candidate you searching :{" "}
            </label>{" "}
            <Select
              options={candidates}
              name="candidate_search"
              onChange={handleChange}
              className="w-1/2 max-lg:w-full hover:border-blue-500"
            />
          </div>
          <div className="my-4 flex-wrap flex justify-center items-center">
            <label
              htmlFor="key skills"
              className="w-1/4 max-lg:w-full capitalize text-start md:text-xs lg:text-sm"
            >
              key skills :{" "}
            </label>
            <input
              type="text"
              name="key_skills"
              onChange={handleChange}
              className="border border-gray-300 capitalize rounded p-2 max-lg:w-full w-1/2 hover:border-blue-500 focus:outline-blue-500"
              placeholder="Enter key skills"
            />
          </div>
          <div className="my-4 flex flex-wrap justify-center items-center">
            <label
              htmlFor="Salary"
              className="w-1/4 max-lg:w-full text capitalize-start capitalize md:text-xs lg:text-sm"
            >
              salary :{" "}
            </label>
            <input
              type="text"
              name="salary"
              onChange={handleChange}
              className="border border-gray-300 capitalize rounded p-2 max-lg:w-full w-1/2 hover:border-blue-500 focus:outline-blue-500"
              placeholder="Enter salary"
            />
          </div>
          <div className="my-4 flex flex-wrap justify-center items-center">
            <label
              htmlFor="language"
              className="w-1/4 max-lg:w-full text-start capitalize md:text-xs lg:text-sm"
            >
              language :{" "}
            </label>
            <input
              type="text"
              name="language"
              onChange={handleChange}
              className="border border-gray-300 capitalize rounded p-2 max-lg:w-full w-1/2 hover:border-blue-500 focus:outline-blue-500"
              placeholder="Enter language"
            />
          </div>
          <div className="my-4 flex flex-wrap justify-center items-center">
            <label
              htmlFor="experience"
              className="w-1/4 max-lg:w-full text-start capitalize md:text-xs lg:text-sm"
            >
              experience :{" "}
            </label>
            <input
              type="text"
              name="experience"
              onChange={handleChange}
              className="border border-gray-300 capitalize rounded p-2 max-lg:w-full w-1/2 hover:border-blue-500 focus:outline-blue-500"
              placeholder="Enter experience"
            />
          </div>
          <div className="my-4 flex flex-wrap justify-center items-center">
            <label
              htmlFor="education"
              className="w-1/4 max-lg:w-full text-start capitalize md:text-xs lg:text-sm"
            >
              education :{" "}
            </label>
            <input
              type="text"
              name="education"
              onChange={handleChange}
              className="border border-gray-300 capitalize rounded p-2 max-lg:w-full w-1/2 hover:border-blue-500 focus:outline-blue-500"
              placeholder="Enter education"
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
              name="location"
              onChange={handleChange}
              className="border border-gray-300 capitalize rounded p-2 max-lg:w-full w-1/2 hover:border-blue-500 focus:outline-blue-500"
              placeholder="Enter location"
            />
          </div>
          <div className="my-4 flex flex-wrap justify-center items-center">
            <label
              htmlFor="Gender"
              className="w-1/4 max-lg:w-full text capitalize-start capitalize md:text-xs lg:text-sm"
            >
              gender :{" "}
            </label>{" "}
            <Select
              options={genders}
              name="gender"
              onChange={handleChange}
              className="w-1/2 max-lg:w-full hover:border-blue-500"
            />
          </div>
          <div className="my-4 flex flex-wrap justify-center items-center">
            <label
              htmlFor="notice period"
              className="w-1/4 max-lg:w-full text capitalize-start capitalize md:text-xs lg:text-sm"
            >
              notice period :{" "}
            </label>{" "}
            <Select
              options={noticeperiod}
              name="notice_period"
              onChange={handleChange}
              className="w-1/2 max-lg:w-full hover:border-blue-500"
              maxMenuHeight={80}
            />
          </div>
          <div className="my-6 flex justify-center items-center">
            <button class="bg-blue-500 hover:bg-blue-700 capitalize text-white py-2 px-8 rounded">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
