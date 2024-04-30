import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../../SubComponents/breadcrumbs";
// import { FaFacebookSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
// import { FiInstagram } from "react-icons/fi";
// import axios from "axios";
import Dashboard from "./dashboard";
import AddPost from "./addpost";
// import Profile from "../pages/Home/profile";

// const apiUrl = process.env.REACT_APP_API_URL;/

const Homepage = () => {
  return (
    <div className="w-full flex bg-white">
      {/* <div> */}
      <Dashboard />
      {/* </div> */}

      <div className="w-full"
        // className={`${
        //   open
        //     ? "absolute grow left-[262px] right-0 h-[100vh] pr-2"
        //     : "absolute top-[50px] grow left-[6%] right-0 h-auto px-4"
        // } duration-500  bg-white`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Homepage;
