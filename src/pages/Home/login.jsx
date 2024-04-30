import React from "react";
import logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-pink-700 w-full min-h-screen flex max-md:flex-wrap">
      <div className="w-[50%] max-md:w-full flex justify-center items-center text-white text-4xl">
        {/* 3 days jobs */}
        <img src={logo} alt="logo" />
      </div>

      <div className="w-[50%] max-md:w-full text-center bg-white m-7 flex justify-center items-center rounded-xl max-h-screen">
        <div className="h-max w-[100%] p-5">
          <div className="capitalize">
            <p className="text-2xl font-medium my-2">welcome to 3 days jobs</p>
            <p className=" text-xs">sign in to find your perfects candidate</p>
          </div>
          <div className="mt-20 mb-20">
            <div className="my-4 flex flex-wrap justify-center items-center">
              <label
                htmlFor="Mobile Number"
                className="w-1/4 max-lg:w-full text-start md:text-xs lg:text-sm"
              >
                Mobile Number :{" "}
              </label>
              <input
                type="number"
                className="border border-gray-300 rounded p-2 max-lg:w-full w-1/2 spin"
                placeholder="Enter Your Mobile Number"
              />
            </div>
            <div className="my-4 flex flex-wrap justify-center items-center">
              <label
                htmlFor="Password"
                className="w-1/4 max-lg:w-full text-start md:text-xs lg:text-sm"
              >
                Password :{" "}
              </label>
              <input
                type="password"
                className="border border-gray-300 rounded p-2 max-lg:w-full w-1/2"
                placeholder="Enter Password"
              />
            </div>
            <div className="my-8">
              <Link to="/homepage/days">
                <button class="bg-pink-600 hover:bg-pink-700 text-white text-sm py-2 px-8 rounded">
                  Login
                </button>
              </Link>
            </div>
          </div>
          <div className="flex text-sm justify-center">
            <p>Don't have an account?</p>
            <p className="text-pink-700 font-bold ml-2 hover:cursor-pointer">
              <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
