import { FaSave, FaWhatsapp } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import capacity from "/src/assets/Icon.png";
import { CiLocationOn } from "react-icons/ci";

function ScheduledJobs() {
  return (
    <>
      <div>
        <div className="text-2xl font-medium m-4 flex justify-between items-center">
          <FaArrowLeftLong className="lg:w-[2%]" />
          <p className="text-center w-full">ScheduledJobs</p>
        </div>
        <div className="grid md:grid-cols-2 max-sm:gap-2 md:gap-2 mr-4">
          <div className="w-full max-sm:mx-1 md:mx-2 hover:shadow-md rounded-lg bg-gray-100">
            <div className="flex justify-around items-center">
              <div className="w-1/4 text-center">
                <div className="flex justify-center items-center m-2">
                  <img src={capacity} style={{ width: "5rem" }} alt="" />
                </div>
                <div className="flex justify-center items-center text-gray-400">
                  <IoEyeOutline className="" />
                  <p className="text-sm">1.5k</p>
                </div>
              </div>
              <div className="w-full mx-2">
                <div className="flex justify-between items-center my-1">
                  <p className="font-medium max-sm:text-sm">UX UI DESIGNER</p>
                  <div className="flex justify-around items-center max-md:w-2/4 lg:w-1/4">
                    <p className="text-xs text-gray-400">2 days ago</p>
                    <FaSave className="text-xl" />
                  </div>
                </div>
                <div className="flex justify-between max-sm:text-xs  items-center my-1 capitalize">
                  <p>company name</p>
                  <p className="md:text-sm text-green-500">
                    interview scheduled
                  </p>
                </div>
                <div className="flex justify-between items-center my-1">
                  <div>
                    <p className="bg-blue-200 rounded px-2 max-sm:text-xs md:text-sm">
                      &#8377;3.0 to &#8377;3.5 LPA
                    </p>
                  </div>
                  <div className="flex items-center capitalize max-sm:text-xs md:text-sm">
                    <CiLocationOn />
                    <p>chennai</p>
                  </div>
                  <div className="flex items-center capitalize max-sm:text-xs md:text-sm">
                    <FaBagShopping />
                    <p>2-4&nbsp;years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-sm:mx-1 md:mx-2 hover:shadow-md rounded-lg bg-gray-100">
            <div className="flex justify-around items-center">
              <div className="w-1/4 text-center">
                <div className="flex justify-center items-center m-2">
                  <img src={capacity} style={{ width: "5rem" }} alt="" />
                </div>
                <div className="flex justify-center items-center text-gray-400">
                  <IoEyeOutline className="" />
                  <p className="text-sm">1.5k</p>
                </div>
              </div>
              <div className="w-full mx-2">
                <div className="flex justify-between items-center my-1">
                  <p className="font-medium max-sm:text-sm">UX UI DESIGNER</p>
                  <div className="flex justify-around items-center max-md:w-2/4 lg:w-1/4">
                    <p className="text-xs text-gray-400">2 days ago</p>
                    <FaSave className="text-xl" />
                  </div>
                </div>
                <div className="flex justify-between max-sm:text-xs  items-center my-1 capitalize">
                  <p>company name</p>
                  <p className="md:text-sm text-green-500">
                    interview scheduled
                  </p>
                </div>
                <div className="flex justify-between items-center my-1">
                  <div>
                    <p className="bg-blue-200 rounded px-2 max-sm:text-xs md:text-sm">
                      &#8377;3.0 to &#8377;3.5 LPA
                    </p>
                  </div>
                  <div className="flex items-center capitalize max-sm:text-xs md:text-sm">
                    <CiLocationOn />
                    <p>chennai</p>
                  </div>
                  <div className="flex items-center capitalize max-sm:text-xs md:text-sm">
                    <FaBagShopping />
                    <p>2-4&nbsp;years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-sm:mx-1 md:mx-2 hover:shadow-md rounded-lg bg-gray-100">
            <div className="flex justify-around items-center">
              <div className="w-1/4 text-center">
                <div className="flex justify-center items-center m-2">
                  <img src={capacity} style={{ width: "5rem" }} alt="" />
                </div>
                <div className="flex justify-center items-center text-gray-400">
                  <IoEyeOutline className="" />
                  <p className="text-sm">1.5k</p>
                </div>
              </div>
              <div className="w-full mx-2">
                <div className="flex justify-between items-center my-1">
                  <p className="font-medium max-sm:text-sm">UX UI DESIGNER</p>
                  <div className="flex justify-around items-center max-md:w-2/4 lg:w-1/4">
                    <p className="text-xs text-gray-400">2 days ago</p>
                    <FaSave className="text-xl" />
                  </div>
                </div>
                <div className="flex justify-between max-sm:text-xs  items-center my-1 capitalize">
                  <p>company name</p>
                  <p className="md:text-sm text-green-500">
                    interview scheduled
                  </p>
                </div>
                <div className="flex justify-between items-center my-1">
                  <div>
                    <p className="bg-blue-200 rounded px-2 max-sm:text-xs md:text-sm">
                      &#8377;3.0 to &#8377;3.5 LPA
                    </p>
                  </div>
                  <div className="flex items-center capitalize max-sm:text-xs md:text-sm">
                    <CiLocationOn />
                    <p>chennai</p>
                  </div>
                  <div className="flex items-center capitalize max-sm:text-xs md:text-sm">
                    <FaBagShopping />
                    <p>2-4&nbsp;years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-sm:mx-1 md:mx-2 hover:shadow-md rounded-lg bg-gray-100">
            <div className="flex justify-around items-center">
              <div className="w-1/4 text-center">
                <div className="flex justify-center items-center m-2">
                  <img src={capacity} style={{ width: "5rem" }} alt="" />
                </div>
                <div className="flex justify-center items-center text-gray-400">
                  <IoEyeOutline className="" />
                  <p className="text-sm">1.5k</p>
                </div>
              </div>
              <div className="w-full mx-2">
                <div className="flex justify-between items-center my-1">
                  <p className="font-medium max-sm:text-sm">UX UI DESIGNER</p>
                  <div className="flex justify-around items-center max-md:w-2/4 lg:w-1/4">
                    <p className="text-xs text-gray-400">2 days ago</p>
                    <FaSave className="text-xl" />
                  </div>
                </div>
                <div className="flex justify-between max-sm:text-xs  items-center my-1 capitalize">
                  <p>company name</p>
                  <p className="md:text-sm text-green-500">
                    interview scheduled
                  </p>
                </div>
                <div className="flex justify-between items-center my-1">
                  <div>
                    <p className="bg-blue-200 rounded px-2 max-sm:text-xs md:text-sm">
                      &#8377;3.0 to &#8377;3.5 LPA
                    </p>
                  </div>
                  <div className="flex items-center capitalize max-sm:text-xs md:text-sm">
                    <CiLocationOn />
                    <p>chennai</p>
                  </div>
                  <div className="flex items-center capitalize max-sm:text-xs md:text-sm">
                    <FaBagShopping />
                    <p>2-4&nbsp;years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-sm:mx-1 md:mx-2 hover:shadow-md rounded-lg bg-gray-100">
            <div className="flex justify-around items-center">
              <div className="w-1/4 text-center">
                <div className="flex justify-center items-center m-2">
                  <img src={capacity} style={{ width: "5rem" }} alt="" />
                </div>
                <div className="flex justify-center items-center text-gray-400">
                  <IoEyeOutline className="" />
                  <p className="text-sm">1.5k</p>
                </div>
              </div>
              <div className="w-full mx-2">
                <div className="flex justify-between items-center my-1">
                  <p className="font-medium max-sm:text-sm">UX UI DESIGNER</p>
                  <div className="flex justify-around items-center max-md:w-2/4 lg:w-1/4">
                    <p className="text-xs text-gray-400">2 days ago</p>
                    <FaSave className="text-xl" />
                  </div>
                </div>
                <div className="flex justify-between max-sm:text-xs  items-center my-1 capitalize">
                  <p>company name</p>
                  <p className="md:text-sm text-green-500">
                    interview scheduled
                  </p>
                </div>
                <div className="flex justify-between items-center my-1">
                  <div>
                    <p className="bg-blue-200 rounded px-2 max-sm:text-xs md:text-sm">
                      &#8377;3.0 to &#8377;3.5 LPA
                    </p>
                  </div>
                  <div className="flex items-center capitalize max-sm:text-xs md:text-sm">
                    <CiLocationOn />
                    <p>chennai</p>
                  </div>
                  <div className="flex items-center capitalize max-sm:text-xs md:text-sm">
                    <FaBagShopping />
                    <p>2-4&nbsp;years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-sm:mx-1 md:mx-2 hover:shadow-md rounded-lg bg-gray-100">
            <div className="flex justify-around items-center">
              <div className="w-1/4 text-center">
                <div className="flex justify-center items-center m-2">
                  <img src={capacity} style={{ width: "5rem" }} alt="" />
                </div>
                <div className="flex justify-center items-center text-gray-400">
                  <IoEyeOutline className="" />
                  <p className="text-sm">1.5k</p>
                </div>
              </div>
              <div className="w-full mx-2">
                <div className="flex justify-between items-center my-1">
                  <p className="font-medium max-sm:text-sm">UX UI DESIGNER</p>
                  <div className="flex justify-around items-center max-md:w-2/4 lg:w-1/4">
                    <p className="text-xs text-gray-400">2 days ago</p>
                    <FaSave className="text-xl" />
                  </div>
                </div>
                <div className="flex justify-between max-sm:text-xs  items-center my-1 capitalize">
                  <p>company name</p>
                  <p className="md:text-sm text-green-500">
                    interview scheduled
                  </p>
                </div>
                <div className="flex justify-between items-center my-1">
                  <div>
                    <p className="bg-blue-200 rounded px-2 max-sm:text-xs md:text-sm">
                      &#8377;3.0 to &#8377;3.5 LPA
                    </p>
                  </div>
                  <div className="flex items-center capitalize max-sm:text-xs md:text-sm">
                    <CiLocationOn />
                    <p>chennai</p>
                  </div>
                  <div className="flex items-center capitalize max-sm:text-xs md:text-sm">
                    <FaBagShopping />
                    <p>2-4&nbsp;years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScheduledJobs;
