import React from "react";
import { FaArrowLeftLong, FaRegClock } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import Candidate1 from "/src/assets/Icon.png";
import { IoEyeOutline } from "react-icons/io5";
import { TiShoppingBag } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { VscCallOutgoing } from "react-icons/vsc";
import { FaEnvelope } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import { MdOutlineDoNotDisturb } from "react-icons/md";

function MainPage() {
  return (
    <div className="bg-white p-2 md:p-4">
      <div className="flex justify-between md:m-2 p-2 text-xl">
        <div>
          <FaArrowLeftLong />
        </div>
        <div className="flex">
          <FaRegBookmark />
          <CiShare2 className="ml-3" />
        </div>
      </div>

      <div className="m-2">
        <div className="flex items-center">
          <div>
            <img
              src={Candidate1}
              className="w-12 rounded-md"
              alt="compony name"
            />
          </div>
          <div className="ml-2 w-full">
            <div className="flex justify-between">
              <p className="text-xl font-medium">Company Name</p>
              <div className=" flex items-center text-gray-400">
                <IoEyeOutline />
                <p className="ml-1 max-sm:text-sm">1.5 k Views</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="">UI UX Designer</p>
              <div className=" flex items-center text-gray-400">
                <p className="ml-1 max-sm:text-sm">2 hrs ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between my-1">
          <div className="flex items-center">
            <TiShoppingBag className="text-xl" />
            <p className="max-sm:text-sm">2-4 Years</p>
          </div>
          <div className="flex">
            <CiLocationOn className="mt-1" />
            <p className="max-sm:text-sm">Chennai,Bangalore/Bengaluru</p>
          </div>
        </div>

        <div className="flex flex-wrap mt-2 justify-between">
          <div className="bg-blue-300 w-max md:p-2 p-1 m-1 text-center text-sm rounded-md">
            Figma
          </div>
          <div className="bg-blue-300 w-max md:p-2 p-1 m-1 text-center text-sm rounded-md">
            Illustrator
          </div>
          <div className="bg-blue-300 w-max md:p-2 p-1 m-1 text-center text-sm rounded-md">
            Figma
          </div>
          <div className="bg-blue-300 w-max md:p-2 p-1 m-1 text-center text-sm rounded-md">
            Photoshop
          </div>
          <div className="bg-blue-300 w-max md:p-2 p-1 m-1 text-center text-sm rounded-md">
            Illustrator
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-2 m-2 rounded-xl">
        <div className="my-2">
          <p className="font-semibold">Key Skills</p>
          <div className="flex flex-wrap mt-2 justify-evenly" id="key">
            <div className="bg-gray-300 md:p-2 text-center text-sm w-max m-1 p-1 rounded-md">
              Figma
            </div>
            <div className="bg-gray-300 md:p-2 w-max m-1 p-1 text-center text-sm rounded-md">
              Product Development
            </div>
            <div className="bg-gray-300 md:p-2 w-max m-1 p-1 text-center text-sm rounded-md">
              Product Design
            </div>
            <div className="bg-gray-300 md:p-2 w-max m-1 p-1 text-center text-sm rounded-md">
              Photoshop
            </div>
            <div className="bg-gray-300 md:p-2 w-max m-1 p-1 text-center text-sm rounded-md">
              Illustrator
            </div>
            <div className="bg-gray-300 md:p-2 w-max m-1 p-1 text-center text-sm rounded-md">
              HTML
            </div>
            <div className="bg-gray-300 md:p-2 w-max m-1 p-1 text-center text-sm rounded-md">
              CSS
            </div>
            <div className="bg-gray-300 md:p-2 w-max m-1 p-1 text-center text-sm rounded-md">
              Wireframing
            </div>
          </div>
        </div>

        <div className="my-2">
          <p className="font-semibold">Education</p>
          <div className="flex mt-2 justify-evenly">
            <div className="bg-gray-300 text-center text-sm w-max m-1 p-1 md:p-2 rounded-md">
              Undergraduate
            </div>
            <div className="bg-gray-300 w-max m-1 p-1 md:p-2 text-center text-sm  rounded-md">
              Postgraduate
            </div>
            <div className="bg-gray-300 w-max m-1 p-1 md:p-2 text-center text-sm  rounded-md">
              PHD
            </div>
          </div>
        </div>

        <div className="my-4 grid xl:grid-cols-4 md:grid-cols-2">
          <div className="flex my-1">
            <p className="font-semibold">Role: </p>
            <p className="ml-2"> UI/UX Designer</p>
          </div>
          <div className="flex my-1">
            <p className="font-semibold">Industry: </p>
            <p className="ml-2">IT Services & Consulting</p>
          </div>
          <div className="flex my-1">
            <p className="font-semibold">Department: </p>
            <p className="ml-2"> UX, Design & Architecture</p>
          </div>
          <div className="flex my-1">
            <p className="font-semibold">Role Category: </p>
            <p className="ml-2"> UI/UX</p>
          </div>
        </div>

        <div className="my-2">
          <p className="font-semibold">Job Description:</p>
          <p className="mt-2 text-justify">
            UI/UX Designer, SaaS Application (Web and Mobile) Healthcare
            Technologies Pvt. Ltd. Bengaluru, Karnataka, India (On-site)
            Healthcare Technologies Pvt Ltd. is a leading healthcare technology
            company based in Bangalore and Chennai, India. We are dedicated to
            revolutionizing the healthcare industry through our SaaS platform,
            mobile applications, and software solutions.
            As we continue to expand, we're looking for an experienced UI/UX
            Designer to join our dynamic team. The ideal candidate will have a
            passion for creating user-centered SaaS applications for both mobile
            and web platforms. You should be proficient in visual design,
            interactive design, and information architecture. A solid
            understanding of designing intuitive site functionality,
            interaction, user interfaces, and navigation is essential.
          </p>
        </div>
        <div className="mb-20"></div>
      </div>

      <div className="bg-gray-100 p-2 m-2 rounded-xl">
        <div className="flex item-center justify-between">
          <div className="flex items-center">
            <p>Recruiter Name</p>
          </div>
          <div className="flex items-center">
            <div className="bg-blue-500 hover:bg-blue-700 w-10 rounded p-1">
              <VscCallOutgoing className="h-8 text-white text-center w-8" />
            </div>
            <div className="bg-green-600 hover:bg-green-800 w-10 ml-4 p-1 rounded-md">
              <FaEnvelope className="h-8 text-white text-center w-8 px-0.5" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-2 m-2 rounded-xl">
        <div className="flex justify-between mt-2">
          <div className="flex my-2">
            <div>
              <img src={Candidate1} className="w-12 h-12 rounded-md" alt="" />
            </div>
            <div className="flex-col ml-5">
              <p className="font-semibold text-xl">Company Name</p>
              <p>www.companyURL.com</p>
            </div>
          </div>
          <div>
            <CiShare1 className="mt-1 w-5 h-5" />
          </div>
        </div>

        <div className="flex">
          <CiLocationOn className="m-1" />
          <p>
            Iit Madras Research Park Kanagam Road Taramani Chennai,
            Tamilnadu,India
          </p>
        </div>

        <div className="my-2">
          <p className="font-semibold">About Company</p>
          <p>
            UI/UX Designer,Saas Application (web and mobile) Healthcare
            Technologies Pvt.Ltd.Bengaluru,Karnataka,India (On-site)
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-2 m-2 rounded-xl flex flex-wrap justify-evenly">
        <button className="bg-yellow-400 hover:bg-yellow-500 p-4 flex rounded-md capitalize item-center justify-center w-96 my-1 mx-2">
          <FaRegClock className="text-white mt-1" />
          <p className="text-white ml-2">Interview scheduled</p>
        </button>
      </div>
    </div>
  );
}

export default MainPage;
