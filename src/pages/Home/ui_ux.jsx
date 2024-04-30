import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { PiSortAscending } from "react-icons/pi";
import img from "/src/assets/candidateimg.jpg";
import { CiBookmark } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { GoBriefcase } from "react-icons/go";
import UI_UX_Details from "./ui_ux_details";

function UI_UX() {
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

        <div className="grid grid-cols-2">
          <div>
            <Link to="/homepage/viewprofile">
              <div className="flex justify-between bg-pink-50	 p-3 m-3 rounded-lg">
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
                      <p>chennai</p>
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
            </Link>
          </div>
          <div>
            <Link to="/homepage/viewprofile">
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
                      <p>chennai</p>
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
            </Link>
          </div>
          <div>
            <Link to="/homepage/viewprofile">
              <div className="flex justify-between bg-pink-50	 p-3 m-3 rounded-lg">
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
                      B.Com (General)
                    </h3>
                    <div className="flex">
                      <CiLocationOn className="mt-1" />
                      <p>chennai</p>
                    </div>
                  </div>
                  <div className="md:flex hidden md:block items-end mb-3">
                    <GoBriefcase className="mb-1 mr-2" />
                    <p>2y 3m</p>
                  </div>
                  <div>
                    <CiBookmark className="mt-1 ml-5 text-gray-400 text-2xl" />
                    <p className="text-cyan-400">Shortlisted</p>
                    <p className="text-gray-400">2hrs ago</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/homepage/viewprofile">
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
                      <p>chennai</p>
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
            </Link>
          </div>
          <div>
            <Link to="/homepage/viewprofile">
              <div className="flex justify-between bg-pink-50	 p-3 m-3 rounded-lg">
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
                      B.Com (General)
                    </h3>
                    <div className="flex">
                      <CiLocationOn className="mt-1" />
                      <p>chennai</p>
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
            </Link>
          </div>
          <div>
            <Link to="/homepage/viewprofile">
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
                      <p>chennai</p>
                    </div>
                  </div>
                  <div className="md:flex hidden md:block items-end mb-3">
                    <GoBriefcase className="mb-1 mr-2" />
                    <p>2y 3m</p>
                  </div>
                  <div>
                    <CiBookmark className="mt-1 ml-5 text-gray-400 text-2xl" />
                    <p className="text-cyan-400">Shortlisted</p>
                    <p className="text-gray-400">2hrs ago</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/homepage/viewprofile">
              <div className="flex justify-between bg-pink-50	 p-3 m-3 rounded-lg">
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
                      B.Com (General)
                    </h3>
                    <div className="flex">
                      <CiLocationOn className="mt-1" />
                      <p>chennai</p>
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
            </Link>
          </div>
          <div>
            <Link to="/homepage/viewprofile">
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
                      <p>chennai</p>
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
            </Link>
          </div>
          <div>
            <Link to="/homepage/viewprofile">
              <div className="flex justify-between bg-pink-50	 p-3 m-3 rounded-lg">
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
                      B.Com (General)
                    </h3>
                    <div className="flex">
                      <CiLocationOn className="mt-1" />
                      <p>chennai</p>
                    </div>
                  </div>
                  <div className="md:flex hidden md:block items-end mb-3">
                    <GoBriefcase className="mb-1 mr-2" />
                    <p>2y 3m</p>
                  </div>
                  <div>
                    <CiBookmark className="mt-1 ml-5 text-gray-400 text-2xl" />
                    <p className="text-cyan-400">Shortlisted</p>
                    <p className="text-gray-400">2hrs ago</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/homepage/viewprofile">
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
                      <p>chennai</p>
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
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default UI_UX;
