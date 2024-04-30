import { FaPlus } from "react-icons/fa";
import logo from "/src/assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
export function Register() {
  const [registerData, SetRegisterData] = useState({
    company_name: "",
    mobile_no: "",
    email: "",
    company_type: "",
    employee_size: "",
    location_type: "",
    metro_location: "",
    address: "",
    company_url: "",
    gst_details: "",
    about_company: "",
  });

  const handleChange = (e) => {
    SetRegisterData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
    // axios
    //   .post(`${url}`, registerData)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  };

  return (
    <>
      <section>
        <div className="bg-pink-700 w-screen h-screen md:p-10 p-2">
          <div className="flex justify-between items-center w-full h-full">
            <div className="bg-white rounded-3xl w-full lg:w-2/4 h-full flex flex-col items-center justify-evenly">
              {/* content on the left goes here */}
              <h1 className="font-medium text-lg">Welcome to 3 Days Jobs</h1>
              <p>Sign in to find your Perfect Candidate</p>
              <div className="border border-black rounded-[50%] xl:text-[12px] p-5 flex flex-col items-center">
                <FaPlus />
                <p>Add</p>
                <p>Company Logo</p>
              </div>
              <form
                action=""
                className="w-full md:w-3/4 overflow-auto p-2 md:p-0"
                onSubmit={handleSubmit}
              >
                <div className="flex items-center justify-between my-3">
                  <label htmlFor="company_name" className="">
                    Company Name:
                  </label>
                  <input
                    placeholder="Enter your company name"
                    type="text"
                    name="company_name"
                    id="company_name"
                    className="border border-gray-300 p-2 rounded-lg w-56 md:w-96"
                    onChange={handleChange}
                    value={registerData.company_name}
                  />
                </div>
                <div className="flex items-center justify-between my-3">
                  <label htmlFor="mobile_number">Mobile Number:</label>
                  <input
                    placeholder="Enter your Mobile Number"
                    type="text"
                    name="mobile_no"
                    id="mobile_number"
                    onChange={handleChange}
                    value={registerData.mobile_no}
                    className="border border-gray-300 p-2 rounded-lg w-56 md:w-96"
                  />{" "}
                </div>
                <div className="flex items-center justify-between my-3">
                  <label htmlFor="email">Email ID:</label>
                  <input
                    placeholder="Enter Email ID"
                    type="text"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={registerData.email}
                    className="border border-gray-300 p-2 rounded-lg w-56 md:w-96"
                  />
                </div>
                <div className="flex items-center justify-between my-3">
                  <label htmlFor="company_type">Company Type:</label>
                  <select
                    name="company_type"
                    id="company_type"
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-lg w-56 md:w-96"
                  >
                    <option value="option-0">Select</option>
                    <option value="Consulting Firm">Consulting Firm</option>
                    <option value="Corporate">Corporate</option>
                  </select>
                </div>
                <div className="flex items-center justify-between my-3">
                  <label htmlFor="employee_size">Employee Size:</label>
                  <select
                    name="employee_size"
                    id="employee_size"
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-lg w-56 md:w-96"
                  >
                    <option value="option-0">Select</option>
                    <option value="Below 20 Employees">
                      Below 20 Employees
                    </option>
                    <option value="20 to 50 Employees">
                      20 to 50 Employees
                    </option>
                    <option value="50 to 100 Employees">
                      50 to 100 Employees
                    </option>
                    <option value="100 to 200 Employees">
                      100 to 200 Employees
                    </option>
                    <option value="200 to 500 Employees">
                      200 to 500 Employees
                    </option>
                    <option value="Above 500 Employees">
                      Above 500 Employees
                    </option>
                  </select>
                </div>
                <div className="flex items-center justify-between my-3">
                  <label htmlFor="location">Location Type:</label>
                  <div className="">
                    <input
                      type="radio"
                      name="location_type"
                      id="metro"
                      onChange={handleChange}
                      value="metro"
                    />
                    <label htmlFor="metro">Metro</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="location_type"
                      id="non-metro"
                      onChange={handleChange}
                      value="non-metro"
                    />
                    <label htmlFor="non-metro">Non-Metro</label>
                  </div>
                </div>
                <div className="flex items-center justify-between my-3">
                  <label htmlFor="metro_location">Metro:</label>
                  <select
                    name="metro_location"
                    id="metro_location"
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-lg w-56 md:w-96"
                  >
                    <option value="option-0">Select</option>
                    <option value="option-1">Option-1</option>
                    <option value="option-2">Option-2</option>
                  </select>
                </div>
                <div className="flex items-center justify-between my-3">
                  <label htmlFor="Address">Address:</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    onChange={handleChange}
                    value={registerData.address}
                    className="border border-gray-300 p-2 rounded-lg w-56 md:w-96"
                    placeholder="Address"
                  />
                </div>
                <div className="flex items-center justify-between my-3">
                  <label htmlFor="company_url">Company URl:</label>
                  <input
                    type="text"
                    name="company_url"
                    id="company_url"
                    onChange={handleChange}
                    value={registerData.company_url}
                    className="border border-gray-300 p-2 rounded-lg w-56 md:w-96"
                    placeholder="Enter your Company URL"
                  />
                </div>
                <div className="flex items-center justify-between my-3">
                  <label htmlFor="gst_details">GST Details:</label>
                  <input
                    type="text"
                    name="gst_details"
                    id="gst_details"
                    onChange={handleChange}
                    value={registerData.gst_details}
                    className="border border-gray-300 p-2 rounded-lg w-56 md:w-96"
                    placeholder="Enter your GST Details"
                  />
                </div>
                <div className="flex items-center  my-3">
                  <label htmlFor="about" className="mr-10 ">
                    About Company:
                  </label>
                  <textarea
                    name="about_company"
                    className="border border-gray-300 rounded-lg"
                    id="about"
                    cols="50"
                    rows="5"
                    onChange={handleChange}
                    value={registerData.about_company}
                  ></textarea>
                </div>
                <div className="flex justify-center items-center">
                  <button type="submit" className="bg-pink-700 p-1 rounded-lg text-white"><Link>Sign Up</Link></button>
                </div>
              </form>
              <div className="my-5">
                <p>
                  Already have an account? 
                  <span className="text-pink-600 font-bold">
                    <Link to="/">Sign in</Link>
                  </span>
                </p>
              </div>
            </div>
            <div className="hidden lg:flex lg:w-2/4 justify-center items-center h-full">
              <div>
                {/* 3days logo goes here */}
                <img src={logo} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
