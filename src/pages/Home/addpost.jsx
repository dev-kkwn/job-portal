import { BsArrowLeft } from "react-icons/bs";
import React, { useState } from "react";

function AddPost() {
  const [activeTab, setActiveTab] = useState(1);
  const [form1Data, setForm1Data] = useState({ email: "", password: "" });
  const [form2Data, setForm2Data] = useState({ firstName: "", lastName: "" });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleForm1Change = (e) => {
    const { name, value } = e.target;
    setForm1Data((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleForm2Change = (e) => {
    const { name, value } = e.target;
    setForm2Data((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleForm1Submit = (e) => {
    e.preventDefault();
    // Handle form 1 submission
    console.log("Form 1 submitted:", form1Data);
  };

  const handleForm2Submit = (e) => {
    e.preventDefault();
    // Handle form 2 submission
    console.log("Form 2 submitted:", form2Data);
  };
  return (
    <div className="w-2/3">
      <div className="flex justify-between w-2/3 mt-9 items-center">
        <div className="ml-20 ">
          <BsArrowLeft className="text-2xl" />
        </div>
        <div className="mr-32">
          <h1 className="text-2xl text-pink-800">Add Post</h1>
        </div>
      </div>
       
      <div>
        {/* <div className="tabs w-96 h-12 rounded-md flex bg-slate-400">
          <button
            className={`${activeTab === 1 ? "active bg-pink-800 w-1/2" : ""}w-1/2`}
            onClick={() => handleTabClick(1)}
          >
            Form 1
          </button>
          <button
            className={`${activeTab === 2 ? "active bg-pink-800 w-1/2" : ""}w-1/2`}
            onClick={() => handleTabClick(2)}
          >
            Form 2
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 1 && (
            <form onSubmit={handleForm1Submit}>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={form1Data.email}
                  onChange={handleForm1Change}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={form1Data.password}
                  onChange={handleForm1Change}
                />
              </label>
              <button type="submit">Submit Form 1</button>
            </form>
          )}
          {activeTab === 2 && (
            <form onSubmit={handleForm2Submit}>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={form2Data.firstName}
                  onChange={handleForm2Change}
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={form2Data.lastName}
                  onChange={handleForm2Change}
                />
              </label>
              <button type="submit">Submit Form 2</button>
            </form>
          )}
        </div>
      </div>
    </div> */}
        <div className="max-w-md mx-auto mt-7 ">
          <div className="flex rounded-md justify-around border h-12">
            <button
              className={`w-1/2 py-2 text-lg font-semibold ${
                activeTab === 1
                  ? "bg-pink-800 text-white w-1/2 rounded-md "
                  : "text-black"
              }`}
              onClick={() => handleTabClick(1)}
            >
              Job Post
            </button>
            <button
              className={`w-1/2 py-2 text-lg font-semibold ${
                activeTab === 2
                  ? "bg-pink-800 text-white w-1/2 rounded-md "
                  : "text-black"
              }`}
              onClick={() => handleTabClick(2)}
            >
              Walk in
            </button>
          </div>
          <div className="bg-white py-4 max-w-md mx-auto">
            {activeTab === 1 && (
              <form className="text-center">
                <div className="mb-4 flex justify-between items-center">
                  <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="jobtitle_jp"
                  >
                    Job Title:
                  </label>
                  <input
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="jobtitle_jp"
                    type="text"
                    placeholder="Enter Job Title"
                  />
                </div>

                <div className="mb-4 flex justify-between items-center">
                  <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="select"
                  >
                    Job Category:
                  </label>
                  <select
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="select"
                    name="select"
                  >
                    <option value="voice">VOICE JOB</option>
                    <option value="non-voice">NON-VOICE JOB</option>
                    <option value="COLLECTION/DELIVERY">
                      COLLECTION/DELIVERY JOB
                    </option>
                    <option value="RETAIL/SHOWROOM">RETAIL/SHOWROOM JOB</option>
                    <option value="FIELDSALES">FIELD SALES JOB</option>
                    <option value="FREELANCER/PARTTIME">
                      FREE LANCER/PART TIME JOB
                    </option>
                  </select>
                </div>

                <div className="mb-4 flex justify-between items-center">
                  <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="keyskills_jp"
                  >
                    Key Skills:
                  </label>
                  <input
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="keyskills_jp"
                    type="text"
                    placeholder="Enter Key Skills"
                  />
                </div>

                <div className="mb-4 flex justify-between items-center">
                  <div>
                    <label
                      className=" text-gray-700 text-lg font-medium mb-2"
                      htmlFor="salary_jp"
                    >
                      Salary:
                    </label>
                  </div>
                  <div className="w-2/3 flex justify-between">
                    <input
                      className="appearance-none border rounded w-[46%] py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                      id="salary_jp"
                      type="text"
                      placeholder="Enter From"
                    />
                    <input
                      className="appearance-none border rounded w-[47%] py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                      id="salary_jp"
                      type="text"
                      placeholder="Enter To"
                    />
                  </div>
                </div>

                <div className="mb-4 flex justify-between items-center">
                  <div>
                    <label
                      className=" text-gray-700 text-lg font-medium mb-2"
                      htmlFor="flex_jp"
                    >
                      Experience:
                    </label>
                  </div>
                  <div className="w-2/3 flex justify-between">
                    <input
                      className="appearance-none border rounded w-[46%] py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                      id="ex_jp"
                      type="text"
                      placeholder="Enter From"
                    />
                    <input
                      className="appearance-none border rounded w-[47%] py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                      id="salary_jp"
                      type="text"
                      placeholder="Enter To"
                    />
                  </div>
                </div>
                
                <div className="mb-4 flex justify-between items-center">
                  <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="location_jp"
                  >
                    Job Location:
                  </label>
                  <input
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="location_jp"
                    type="text"
                    placeholder="Enter Job Location"
                  />
                </div>

                <div className="mb-4 flex justify-between items-center">
                  <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="jobtype_jp"
                  >
                    Job Type:
                  </label>
                  <select
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="jobtype_jp"
                    name="jobtype_jp"
                  >
                    <option value="intern">INTERNSHIP</option>
                    <option value="part-time">PART TIME</option>
                    <option value="full-time">
                      FULL TIME
                    </option>
                  </select>
                </div>

                <div className="mb-4 flex justify-between items-center">
                  <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="workmode_jp"
                  >
                    Work Mode:
                  </label>
                  <select
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="workmode"
                    name="workmode"
                  >
                    <option value="onsite">ONSITE</option>
                    <option value="hybrid">HYBRID</option>
                    <option value="work-from-home">
                      WORK FROM HOME
                    </option>
                  </select>
                </div>

                <div className="mb-4 flex justify-between items-center">
                  <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="education_jp"
                  >
                    Education:
                  </label>
                  <select
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="education"
                    name="education"
                  >
                    <option value="Any-One">ANY ONE</option>
                    <option value="ug">UG</option>
                    <option value="pg">PG</option>
                    <option value="phd">PHD</option>
                  </select>
                </div>

                <div className="mb-4 flex justify-between items-center">
                <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="department_jp"
                  >
                    Department:
                  </label>
                  <input
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="department_jp"
                    type="text"
                    placeholder="Enter Department"
                  />
                </div>

                <div className="mb-4 flex justify-between items-center">
                <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="industrytype_jp"
                  >
                    Industry type:
                  </label>
                  <input
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="industrytype_jp"
                    type="text"
                    placeholder="Enter Industry Type"
                  />
                </div>

                <div className="mb-4 flex justify-between items-center">
                <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="rolecatogery_jp"
                  >
                    Role Category:
                  </label>
                  <input
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="rolecatogery_jp"
                    type="text"
                    placeholder="Enter Role Category"
                  />
                </div>

                <div className="mb-4 flex justify-between items-center"> 
                <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="role_jp"
                  >
                    Role:
                  </label>
                  <input
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="role_jp"
                    type="text"
                    placeholder="Enter Role"
                  />
                </div>

                <div className="mb-4 flex justify-between items-center">
                <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="noofopening_jp"
                  >
                    No Of Opening:
                  </label>
                  <input
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="noofopening_jp"
                    type="text"
                    placeholder="Enter No of opening"
                  />
                </div>

                <div className="mb-4 flex justify-between items-center">
                  <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="noticeperiod"
                  >
                    Notice Period:
                  </label>
                  <select
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="noticeperiod"
                    name="noticeperiod"
                  >
                    <option value="immediately">Immediately</option>
                    <option value="15-days">15 DAYS</option>
                    <option value="30-days">30 DAYS</option>
                    <option value="gt30-days">{">"} 30 DAYS</option>
                  </select>
                </div>

                <div className="mb-4 flex justify-between items-center">
                  <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="recruiter"
                  >
                    Recruiters:
                  </label>
                  <select
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="recruiter"
                    name="recruiter"
                  >
                    <option value="recruiter1">Recruiter 1</option>
                    <option value="recruiter2">Recruiter 2</option>
                    <option value="recruiter3">Recruiter 3</option>
                  </select>
                </div>

                <div className="mb-4 flex justify-between items-center">
                  <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="jobdescription"
                  >
                    Job Description:
                  </label>
                  <textarea id="jobdescription" name="postContent" className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" placeholder="Type Here" rows={4} cols={40} />
                </div>

                <button
                  className="bg-pink-800 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
            {activeTab === 2 && (
              <form className="text-center">
              <div className="mb-4 flex justify-between items-center">
                <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="walkin_wi"
                >
                  Walk In Details:
                </label>
                <input
                  className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="walkin_wi"
                  type="text"
                  placeholder="SELECT"
                />
              </div>

              <div className="mb-4 flex justify-between items-center">
                <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="jobtitle_jp"
                >
                  Job Title:
                </label>
                <input
                  className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="jobtitle_jp"
                  type="text"
                  placeholder="Enter Job Title"
                />
              </div>

              <div className="mb-4 flex justify-between items-center">
                <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="select"
                >
                  Job Category:
                </label>
                <select
                  className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="select"
                  name="select"
                >
                  <option value="voice">VOICE JOB</option>
                  <option value="non-voice">NON-VOICE JOB</option>
                  <option value="COLLECTION/DELIVERY">
                    COLLECTION/DELIVERY JOB
                  </option>
                  <option value="RETAIL/SHOWROOM">RETAIL/SHOWROOM JOB</option>
                  <option value="FIELDSALES">FIELD SALES JOB</option>
                  <option value="FREELANCER/PARTTIME">
                    FREE LANCER/PART TIME JOB
                  </option>
                </select>
              </div>

              <div className="mb-4 flex justify-between items-center">
                <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="keyskills_jp"
                >
                  Key Skills:
                </label>
                <input
                  className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="keyskills_jp"
                  type="text"
                  placeholder="Enter Key Skills"
                />
              </div>

              <div className="mb-4 flex justify-between items-center">
                <div>
                  <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="salary_jp"
                  >
                    Salary:
                  </label>
                </div>
                <div className="w-2/3 flex justify-between">
                  <input
                    className="appearance-none border rounded w-[46%] py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="salary_jp"
                    type="text"
                    placeholder="Enter From"
                  />
                  <input
                    className="appearance-none border rounded w-[47%] py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="salary_jp"
                    type="text"
                    placeholder="Enter To"
                  />
                </div>
              </div>

              <div className="mb-4 flex justify-between items-center">
                <div>
                  <label
                    className=" text-gray-700 text-lg font-medium mb-2"
                    htmlFor="flex_jp"
                  >
                    Experience:
                  </label>
                </div>
                <div className="w-2/3 flex justify-between">
                  <input
                    className="appearance-none border rounded w-[46%] py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="ex_jp"
                    type="text"
                    placeholder="Enter From"
                  />
                  <input
                    className="appearance-none border rounded w-[47%] py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="salary_jp"
                    type="text"
                    placeholder="Enter To"
                  />
                </div>
              </div>
              
              <div className="mb-4 flex justify-between items-center">
                <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="location_jp"
                >
                  Job Location:
                </label>
                <input
                  className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="location_jp"
                  type="text"
                  placeholder="Enter Job Location"
                />
              </div>

              <div className="mb-4 flex justify-between items-center">
                <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="jobtype_jp"
                >
                  Job Type:
                </label>
                <select
                  className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="jobtype_jp"
                  name="jobtype_jp"
                >
                  <option value="intern">INTERNSHIP</option>
                  <option value="part-time">PART TIME</option>
                  <option value="full-time">
                    FULL TIME
                  </option>
                </select>
              </div>

              <div className="mb-4 flex justify-between items-center">
                <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="workmode_jp"
                >
                  Work Mode:
                </label>
                <select
                  className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="workmode"
                  name="workmode"
                >
                  <option value="onsite">ONSITE</option>
                  <option value="hybrid">HYBRID</option>
                  <option value="work-from-home">
                    WORK FROM HOME
                  </option>
                </select>
              </div>

              <div className="mb-4 flex justify-between items-center">
                <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="education_jp"
                >
                  Education:
                </label>
                <select
                  className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="education"
                  name="education"
                >
                  <option value="Any-One">ANY ONE</option>
                  <option value="ug">UG</option>
                  <option value="pg">PG</option>
                  <option value="phd">PHD</option>
                </select>
              </div>

              <div className="mb-4 flex justify-between items-center">
              <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="department_jp"
                >
                  Department:
                </label>
                <input
                  className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="department_jp"
                  type="text"
                  placeholder="Enter Department"
                />
              </div>

              <div className="mb-4 flex justify-between items-center">
              <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="industrytype_jp"
                >
                  Industry type:
                </label>
                <input
                  className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="industrytype_jp"
                  type="text"
                  placeholder="Enter Industry Type"
                />
              </div>

              <div className="mb-4 flex justify-between items-center">
              <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="rolecatogery_jp"
                >
                  Role Category:
                </label>
                <input
                  className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="rolecatogery_jp"
                  type="text"
                  placeholder="Enter Role Category"
                />
              </div>

              <div className="mb-4 flex justify-between items-center"> 
              <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="role_jp"
                >
                  Role:
                </label>
                <input
                  className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="role_jp"
                  type="text"
                  placeholder="Enter Role"
                />
              </div>

              <div className="mb-4 flex justify-between items-center">
              <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="noofopening_jp"
                >
                  No Of Opening:
                </label>
                <input
                  className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="noofopening_jp"
                  type="text"
                  placeholder="Enter No of opening"
                />
              </div>

              <div className="mb-4 flex justify-between items-center">
                <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="noticeperiod"
                >
                  Notice Period:
                </label>
                <select
                  className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="noticeperiod"
                  name="noticeperiod"
                >
                  <option value="immediately">Immediately</option>
                  <option value="15-days">15 DAYS</option>
                  <option value="30-days">30 DAYS</option>
                  <option value="gt30-days">{">"} 30 DAYS</option>
                </select>
              </div>

              <div className="mb-4 flex justify-between items-center">
                <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="recruiter"
                >
                  Recruiters:
                </label>
                <select
                  className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="recruiter"
                  name="recruiter"
                >
                  <option value="recruiter1">Recruiter 1</option>
                  <option value="recruiter2">Recruiter 2</option>
                  <option value="recruiter3">Recruiter 3</option>
                </select>
              </div>

              <div className="mb-4 flex justify-between items-center">
                <label
                  className=" text-gray-700 text-lg font-medium mb-2"
                  htmlFor="jobdescription"
                >
                  Job Description:
                </label>
                <textarea id="jobdescription" placeholder="Type Here" name="postContent" className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"  rows={4} cols={40} />
              </div>

              <button
                className="bg-pink-800 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
