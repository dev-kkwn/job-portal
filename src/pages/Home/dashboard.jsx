import React, { useEffect, useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { TiGroupOutline } from "react-icons/ti";
import { SlLocationPin } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { BsQuestionCircle } from "react-icons/bs";
import { CgHeadset } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { motion } from "framer-motion";
import logo from "/src/assets/dashlogo.png";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "12%" },
};

const navItems = [
  {
    name: "Dashboard",
    path: "/homepage/days",
    icon: LuLayoutDashboard,
  },
  {
    name: "Candidates",
    path: "/homepage/candidate",
    icon: FaRegUser,
  },
  {
    name: "Manage Job Post",
    path: "/homepage/jobpost",
    icon: FaRegFileAlt,
  },
  {
    name: "Manage Recruiter",
    path: "/homepage/managerecruiter",
    icon: TiGroupOutline,
  },
  {
    name: "Manage Location",
    path: "/homepage/managelocation",
    icon: SlLocationPin,
  },
  {
    name: "Profile",
    path: "/homepage/profile",
    icon: CgProfile,
  },
  {
    name: "FAQ’s",
    path: "/homepage/faq",
    icon: BsQuestionCircle,
  },
  {
    name: "Support",
    path: "/homepage/support",
    icon: CgHeadset,
  },
  {
    name: "Logout",
    path: "/",
    icon: TbLogout,
  },
];

const Sidebar = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.section
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      id="side"
      className={
        "w-1/5 bg-pink-800  h-full flex flex-col justify-between items-center px-2 relative" +
        (isExpanded ? "px-5" : "px-8 ")
      }
    >
      <div className=" flex flex-col justify-center items-center mt-5">
        {isExpanded ? (
          <div id="logo-box">
            <h1 className="mb-2 mt-2">
              {" "}
              <img
                src={logo}
                alt="logo"
                className={`w-7 h-9  max-lg:mr-2 max-lg:text-xl text-4xl rounded cursor-pointer block float-left mr-4 `}
              />{" "}
              <span className=" text-white font-bold text-3xl max-lg:text-2xl">
                {" "}
                DAY JOBS
              </span>
            </h1>
          </div>
        ) : (
          <div className=" flex justify-center items-center mb-3">
            {" "}
            <img
              src={logo}
              alt="logo"
              className={`w-7 h-9  text-4xl rounded cursor-pointer block float-left mr-4 mt-1 ml-4`}
            />
          </div>
        )}

        <div
          id=" navlinks-box"
          className={
            " flex flex-col justify-center items-start gap-4 w-full mt-5" +
            (isExpanded ? "" : " gap-1")
          }
        >
          {/* search  */}
          <div
            className={
              " text-white    flex justify-start items-center gap-4 w-full cursor-pointer rounded-xl  font-medium  " +
              (!isExpanded ? " size-8 " : "px-4 py-1.5 bg-pink-600  ")
            }
          >
            <IoSearchSharp
              className={
                "  block float-left cursor-pointer " +
                (isExpanded
                  ? " text-white size-8 ml-1  "
                  : " h-9 w-9  ml-4  rounded-full p-1.5 hover:scale-95")
              }
            />
            <input
              type={"search"}
              placeholder="Search"
              className={
                "placeholder-white font-medium text-base  bg-transparent w-full text-white focus:outline-none   " +
                (!isExpanded ? "hidden  " : "")
              }
            />
          </div>

          <div className="hover:w-full min-h-screen">
            {navItems.map((item, index) => (
              <Link to={item.path}>
                <div
                  key={item.name}
                  id="link-box"
                  className={
                    " text-white flex justify-start items-center gap-4 w-full cursor-pointer rounded-xl  font-medium " +
                    (activeNavIndex === index
                      ? "  text-black "
                      : "text-white") +
                    (isExpanded
                      ? "   py-1.5 pl-2 pr-4 hover:bg-white hover:text-black"
                      : " rounded-full p-2  mr-2  hover:scale-95 ")
                  }
                  onClick={() => setActiveNavIndex(index)}
                >
                  <div
                    className={
                      "   text-white  rounded-full ml-2 p-1 bg-pink-800 " +
                      (isExpanded ? "" : " hover:bg-white  text-black")
                    }
                  >
                    <item.icon
                      className={
                        " md:w-8 w-5 h-5 md:h-8  " +
                        (isExpanded ? "" : " h-6 w-6  p-0.5 hover:text-black")
                      }
                    />
                  </div>
                  <span
                    className={"text-lg " + (isExpanded ? "flex  " : "hidden ")}
                  >
                    {item?.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* <div id=' expanded-icon' className=' bg-yellow-400 text-black p-2 rounded-full cursor-pointer absolute  ml-72  -mr-5 bottom-20  
          md:bottom-40 md:flex hidden' onClick={() => (setIsExpanded(!isExpanded))}>
<BsArrowLeftShort/>
          </div> */}

      {/* <div id='logout-box' className='  w-full flex flex-col justify-start  cursor-pointer'>
             <div className=' bg-slate-800 w-full h-[0.5px]'></div>
             <div className=' flex justify-start items-center gap-2 w-full h-10 ml-10'>
             <TbLogout className=' text-white h-6 w-6 justify-start'/>  
             <span className={' text-white text-lg -ml-6' + (isExpanded ? 'flex' : 'hidden')}>Logout</span> 
             </div>
          </div> */}
    </motion.section>
  );
};

export default Sidebar;
