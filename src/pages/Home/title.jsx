import React from "react";
import { PiNumberCircleThreeBold } from "react-icons/pi";


function Title() {
    return(
        <>
        <div className="bg-pink-800 h-screen flex justify-center items-center">
        <div className="  ">
          <div className="flex justify-center items-center  text-white text-6xl md:text-8xl">
            <p>
              <PiNumberCircleThreeBold />
            </p>
          </div>
          <div>
            <p className="text-center text-white font-bold text-2xl md:text-6xl">
              DAY JOBS
            </p>
          </div>
        </div>
      </div>
        </>
    )
};


export default Title;