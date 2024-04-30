import React from 'react'
import { CiUser } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
import volks from "/src/assets/Icon.png"
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { TbLayoutDashboard } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";






function RecruiterProfile() {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <div className='flex items-center justify-center'>

          <p className='flex items-center text-pink-800 text-center ml-17'>
            <CiUser />profile </p> 
        </div>

        <div className="flex justify-end m">
          <button className='flex items-center  bg-pink-800 text-white'> <span className='w-5 bg-black h-6 items-center justify-center flex'> <IoAddOutline /></span>Add</button>
          
        </div>
        
        
      </div>
      <div className="flex justify-center item-center p-10 h-60" >
        <img src={volks} alt="" />
      </div>
      <div className="justify-center flex p-2">
        <p>Company name</p>
      </div>
      <div className="items-center flex justify-center p-2">
        <CiPhone /><p>899949499</p>

      </div>
      <div className="flex items-center  justify-center ">
        <CiMail /><p className='p-2'>User@gmail.com</p>

      </div>
     <div className='flex justify-center p-4'>
     <div>
        <table >
          
          <tr>
            <td className='pe-20 '>company Type</td>
            <td className='pe-20'>Employe Size</td>
            <td className='pe-20'>Location Type</td>
          </tr>
          <tr>
            <td className='pe-20'>company</td>
            <td>Consulting firm</td>
            <td>Metro</td>
          </tr>
          
        </table>
        <div className="p-1 ">
        <table>
        <tr>
            <td className='pe-32'>Location</td>
            <td>company</td>
            {/* <td>company</td> */}
          </tr>
          <tr>
            <td>Chennai</td>
            <td>Chennai</td>
            {/* <td>company</td> */}
          </tr>
          
        </table>
        </div>
      </div>
      </div>
      <div >
        
      <table className="ml-16" >
          
          <tr>
            <td>company</td>
            </tr>
            <tr>
            <td>company</td>
            
            </tr>

            </table>
        
      </div>
    </div>
  )
}

export default RecruiterProfile;
