import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { PiSortAscending } from "react-icons/pi";
import img from "/src/assets/candidateimg.jpg";
import { CiBookmark } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { GoBriefcase } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";

function UI_UX_Details() {
  return (
    <>
      <section className="">
        {/* head line */}
        <div className="flex justify-between m-5">
          <BiArrowBack className="text-2xl m-2" />
          <div className="md:flex text-pink-600">
            <h1 className="text-xl md:text-3xl lg:text-4xl">UX UI Designer</h1>
            <p className="content-end	">(200 Applications)</p>
          </div>
          <div className="flex">
            <PiSortAscending className="text-2xl ml-2 mt-2 mb-2" />
            <h3 className="mr-2 mt-2">Sort</h3>
          </div>
        </div>

        <div className="flex">
          {/* left side */}
          <div className="md:w-1/2 hidden md:block">
            <div className="flex justify-between bg-pink-50 p-3 m-3 rounded-lg">
              <div>
                <img
                  src={img}
                  alt="profile_pic"
                  className="w-16 h-16 rounded-xl"
                />
                <input className="ml-5" type="checkbox" />
              </div>
              <div className="flex  justify-between w-full pl-2">
                <div>
                  <h3>
                    Candidate Name <br />
                    B.E (Mech)
                  </h3>
                  <div className="flex">
                    <CiLocationOn className="mt-1" />
                    <p>Chenai</p>
                  </div>
                </div>
                <div className="md:flex hidden md:block items-end mb-3">
                  <GoBriefcase className="mb-1 mr-2" />
                  <p>2y 3m</p>
                </div>
                <div>
                  <CiBookmark className="mt-1 ml-5 text-gray-400 text-2xl" />
                  <p className="text-cyan-400">Applied</p>
                  <p className="text-gray-400">2hrs ago</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-pink-50	 p-3 m-3 rounded-lg">
              <div>
                <img
                  src={img}
                  alt="profile_pic"
                  className="w-16 h-16 rounded-xl"
                />
                <input className="ml-5" type="checkbox" />
              </div>
              <div className="flex justify-between w-full pl-2">
                <div>
                  <h3>
                    Candidate Name <br />
                    B.Com (General)
                  </h3>
                  <div className="flex">
                    <CiLocationOn className="mt-1" />
                    <p>Chenai</p>
                  </div>
                </div>
                <div className="md:flex hidden md:block items-end mb-3">
                  <GoBriefcase className="mb-1 mr-2" />
                  <p>2y 3m</p>
                </div>
                <div>
                  <CiBookmark className="mt-1 ml-5 text-gray-400 text-2xl" />
                  <p className="text-cyan-400">Applied</p>
                  <p className="text-gray-400">2hrs ago</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-pink-50 p-3 m-3 rounded-lg">
              <div>
                <img
                  src={img}
                  alt="profile_pic"
                  className="w-16 h-16 rounded-xl"
                />
                <input className="ml-5" type="checkbox" />
              </div>
              <div className="flex  justify-between w-full pl-2">
                <div>
                  <h3>
                    Candidate Name <br />
                    B.E (Mech)
                  </h3>
                  <div className="flex">
                    <CiLocationOn className="mt-1" />
                    <p>Chenai</p>
                  </div>
                </div>
                <div className="md:flex hidden md:block items-end mb-3">
                  <GoBriefcase className="mb-1 mr-2" />
                  <p>2y 3m</p>
                </div>
                <div>
                  <CiBookmark className="mt-1 ml-5 text-gray-400 text-2xl" />
                  <p className="text-cyan-400">Applied</p>
                  <p className="text-gray-400">2hrs ago</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-pink-50	 p-3 m-3 rounded-lg">
              <div>
                <img
                  src={img}
                  alt="profile_pic"
                  className="w-16 h-16 rounded-xl"
                />
                <input className="ml-5" type="checkbox" />
              </div>
              <div className="flex justify-between w-full pl-2">
                <div>
                  <h3>
                    Candidate Name <br />
                    B.Com (General)
                  </h3>
                  <div className="flex">
                    <CiLocationOn className="mt-1" />
                    <p>Chenai</p>
                  </div>
                </div>
                <div className="md:flex hidden md:block items-end mb-3">
                  <GoBriefcase className="mb-1 mr-2" />
                  <p>2y 3m</p>
                </div>
                <div>
                  <CiBookmark className="mt-1 ml-5 text-gray-400 text-2xl" />
                  <p className="text-cyan-400">Applied</p>
                  <p className="text-gray-400">2hrs ago</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-pink-50 p-3 m-3 rounded-lg">
              <div>
                <img
                  src={img}
                  alt="profile_pic"
                  className="w-16 h-16 rounded-xl"
                />
                <input className="ml-5" type="checkbox" />
              </div>
              <div className="flex  justify-between w-full pl-2">
                <div>
                  <h3>
                    Candidate Name <br />
                    B.E (Mech)
                  </h3>
                  <div className="flex">
                    <CiLocationOn className="mt-1" />
                    <p>Chenai</p>
                  </div>
                </div>
                <div className="md:flex hidden md:block items-end mb-3">
                  <GoBriefcase className="mb-1 mr-2" />
                  <p>2y 3m</p>
                </div>
                <div>
                  <CiBookmark className="mt-1 ml-5 text-gray-400 text-2xl" />
                  <p className="text-cyan-400">Applied</p>
                  <p className="text-gray-400">2hrs ago</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-pink-50	 p-3 m-3 rounded-lg">
              <div>
                <img
                  src={img}
                  alt="profile_pic"
                  className="w-16 h-16 rounded-xl"
                />
                <input className="ml-5" type="checkbox" />
              </div>
              <div className="flex justify-between w-full pl-2">
                <div>
                  <h3>
                    Candidate Name <br />
                    B.Com (General)
                  </h3>
                  <div className="flex">
                    <CiLocationOn className="mt-1" />
                    <p>Chenai</p>
                  </div>
                </div>
                <div className="md:flex hidden md:block items-end mb-3">
                  <GoBriefcase className="mb-1 mr-2" />
                  <p>2y 3m</p>
                </div>
                <div>
                  <CiBookmark className="mt-1 ml-5 text-gray-400 text-2xl" />
                  <p className="text-cyan-400">Applied</p>
                  <p className="text-gray-400">2hrs ago</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-pink-50 p-3 m-3 rounded-lg">
              <div>
                <img
                  src={img}
                  alt="profile_pic"
                  className="w-16 h-16 rounded-xl"
                />
                <input className="ml-5" type="checkbox" />
              </div>
              <div className="flex  justify-between w-full pl-2">
                <div>
                  <h3>
                    Candidate Name <br />
                    B.E (Mech)
                  </h3>
                  <div className="flex">
                    <CiLocationOn className="mt-1" />
                    <p>Chenai</p>
                  </div>
                </div>
                <div className="md:flex hidden md:block items-end mb-3">
                  <GoBriefcase className="mb-1 mr-2" />
                  <p>2y 3m</p>
                </div>
                <div>
                  <CiBookmark className="mt-1 ml-5 text-gray-400 text-2xl" />
                  <p className="text-cyan-400">Applied</p>
                  <p className="text-gray-400">2hrs ago</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-pink-50	 p-3 m-3 rounded-lg">
              <div>
                <img
                  src={img}
                  alt="profile_pic"
                  className="w-16 h-16 rounded-xl"
                />
                <input className="ml-5" type="checkbox" />
              </div>
              <div className="flex justify-between w-full pl-2">
                <div>
                  <h3>
                    Candidate Name <br />
                    B.Com (General)
                  </h3>
                  <div className="flex">
                    <CiLocationOn className="mt-1" />
                    <p>Chenai</p>
                  </div>
                </div>
                <div className="md:flex hidden md:block items-end mb-3">
                  <GoBriefcase className="mb-1 mr-2" />
                  <p>2y 3m</p>
                </div>
                <div>
                  <CiBookmark className="mt-1 ml-5 text-gray-400 text-2xl" />
                  <p className="text-cyan-400">Applied</p>
                  <p className="text-gray-400">2hrs ago</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-pink-50 p-3 m-3 rounded-lg">
              <div>
                <img
                  src={img}
                  alt="profile_pic"
                  className="w-16 h-16 rounded-xl"
                />
                <input className="ml-5" type="checkbox" />
              </div>
              <div className="flex  justify-between w-full pl-2">
                <div>
                  <h3>
                    Candidate Name <br />
                    B.E (Mech)
                  </h3>
                  <div className="flex">
                    <CiLocationOn className="mt-1" />
                    <p>Chenai</p>
                  </div>
                </div>
                <div className="md:flex hidden md:block items-end mb-3">
                  <GoBriefcase className="mb-1 mr-2" />
                  <p>2y 3m</p>
                </div>
                <div>
                  <CiBookmark className="mt-1 ml-5 text-gray-400 text-2xl" />
                  <p className="text-cyan-400">Applied</p>
                  <p className="text-gray-400">2hrs ago</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-pink-50	 p-3 m-3 rounded-lg">
              <div>
                <img
                  src={img}
                  alt="profile_pic"
                  className="w-16 h-16 rounded-xl"
                />
                <input className="ml-5" type="checkbox" />
              </div>
              <div className="flex justify-between w-full pl-2">
                <div>
                  <h3>
                    Candidate Name <br />
                    B.Com (General)
                  </h3>
                  <div className="flex">
                    <CiLocationOn className="mt-1" />
                    <p>Chenai</p>
                  </div>
                </div>
                <div className="md:flex hidden md:block items-end mb-3">
                  <GoBriefcase className="mb-1 mr-2" />
                  <p>2y 3m</p>
                </div>
                <div>
                  <CiBookmark className="mt-1 ml-5 text-gray-400 text-2xl" />
                  <p className="text-cyan-400">Applied</p>
                  <p className="text-gray-400">2hrs ago</p>
                </div>
              </div>
            </div>
          </div>

          {/*right side details */}
          <div className="md:w-1/2 bg-pink-50 md:m-3 rounded-lg">
            <div className="bg-pink-100 drop-shadow-lg p-3 m-3 rounded-lg">
              <div className="flex justify-between">
                <div>
                  <img
                    src={img}
                    alt="profile_pic"
                    className="w-16 h-16 rounded-xl"
                  />
                </div>
                <div className="flex justify-between w-full pl-2">
                  <div>
                    <h3 className="font-medium text-lg">Candidate Name</h3>
                    <div className="flex">
                      <CiLocationOn className="mt-1" />
                      <p>Chenai</p>
                    </div>
                  </div>
                  <div className="flex ">
                    <CiBookmark className="mt-1 ml-5 text-gray-400 text-2xl" />
                    <IoShareSocialOutline className="mt-1 ml-5 text-gray-400 text-2xl" />
                  </div>
                </div>
              </div>

              <div className="lg:flex justify-evenly mt-2">
                <div className="flex justify-between md:justify-evenly m-1">
                  <div className="flex bg-cyan-200 w-40 pt-1 pb-1 rounded-md place-content-center md:mx-5">
                    <GrNotes className="mt-1 mr-1" />
                    <p>Resume</p>
                  </div>
                  <div className="flex bg-red-500 w-24 pt-1 pb-1 rounded-md place-content-center">
                    <MdOutlineMailOutline className="mt-1 mr-1" />
                    <p>Mail</p>
                  </div>
                </div>
                <div className="flex justify-between m-1">
                  <div className="flex bg-blue-400 w-24 pt-1 pb-1 rounded-md place-content-center md:mx-5">
                    <IoCallOutline className="mt-1 mr-1" />
                    <p>call</p>
                  </div>
                  <div className="flex bg-green-400 w-40 pt-1 pb-1 rounded-md place-content-center">
                    <BsWhatsapp className="mt-1 mr-1" />
                    <p>WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>

            {/* key skills  */}
            <div className="m-3 p-3 border-solid border-2 rounded-lg">
              <h2 className="text-lg font-medium mb-1">Key Skills</h2>
              <div className="md:flex">
                <p className="bg-gray-300 p-1 m-1 rounded-md">HTML</p>
                <p className="bg-gray-300 p-1 m-1 rounded-md">CSS</p>
                <p className="bg-gray-300 p-1 m-1 rounded-md">JAVA SCRIPT</p>
                <p className="bg-gray-300 p-1 m-1 rounded-md">RECAT JS</p>
                <p className="bg-gray-300 p-1 m-1 rounded-md">NODE JS</p>
              </div>
            </div>

            {/* Employment */}
            <div className="m-3 p-3 border-solid border-2 rounded-lg">
              <h2 className="font-medium text-lg">Employment</h2>
              <h3 className="mb-1">
                <span className="font-medium text-lg">Company Name</span>
                (currently working)
              </h3>
              <div className="md:flex mt-1 mb-1">
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Experiance</p>
                  <p className="font-medium">1 year 2 months</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Employment Type</p>
                  <p className="font-medium">Full Time</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Designation</p>
                  <p className="font-medium">Full Stack Developer</p>
                </div>
              </div>
              <div className="md:flex mt-1 mb-1">
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Current Salary</p>
                  <p className="font-medium">3,00,000</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Notice Period</p>
                  <p className="font-medium">30 days</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2"></div>
              </div>
            </div>

            {/* Education */}
            <div className="m-3 p-3 border-solid border-2 rounded-lg">
              <h3 className="font-medium text-lg">Education</h3>
              <h3 className="font-medium text-lg">Graduation/Diploma</h3>
              <div className="md:flex mt-1 mb-1">
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Course</p>
                  <p className="font-medium">B.E</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Specialization</p>
                  <p className="font-medium">MECH</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Education Type</p>
                  <p className="font-medium">Full Time</p>
                </div>
              </div>
              <div className="md:flex mt-1 mb-1">
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">2017-2021</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Percentage</p>
                  <p className="font-medium">76%</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2"></div>
              </div>
              <h3 className="font-medium text-lg">Post Graduation</h3>
              <div className="md:flex mt-1 mb-1">
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Course</p>
                  <p className="font-medium">M.E</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Specialization</p>
                  <p className="font-medium">MECH</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Education Type</p>
                  <p className="font-medium">Full Time</p>
                </div>
              </div>
              <div className="md:flex mt-1 mb-1">
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">2021-2023</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Percentage</p>
                  <p className="font-medium">80%</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2"></div>
              </div>
            </div>

            {/* personal info */}
            <div className="m-3 p-3 border-solid border-2 rounded-lg">
              <h2 className="font-medium text-lg">Personal Information</h2>
              <div className="md:flex mt-1 mb-1">
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">DOB</p>
                  <p className="font-medium">21-12-1999</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Gender</p>
                  <p className="font-medium">Male</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">City</p>
                  <p className="font-medium">Chennai</p>
                </div>
              </div>
              <div className="md:flex mt-1 mb-1">
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">State</p>
                  <p className="font-medium">Tamilnadu</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Pincode</p>
                  <p className="font-medium">606 903</p>
                </div>
                <div className="md:w-1/3 mt-2 mb-2">
                  <p className="text-gray-500">Language</p>
                  <p className="font-medium">English,Tamil</p>
                </div>
              </div>
            </div>

            {/* bottom */}
            <div className="flex bg-pink-100 p-3 border-solid border-2 rounded-lg justify-evenly">
              <button className="w-1/4 m-2 pt-2 pb-2 rounded-md place-content-center bg-red-500 text-white">
                Reject
              </button>
              <button className="w-3/4 m-2 pt-2 pb-2 rounded-md place-content-center bg-green-500 text-white">
                Shortlist
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default UI_UX_Details;
