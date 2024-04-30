import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";

export function ProfileForm() {
  const [candidateProfile, SetCandidateProfile] = useState({
    dob: "",
    gender: "",
    language: "",
    city: "",
    state: "",
    pincode: "",
  });

  const genders = [
    { value: "select", label: "Select" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "others", label: "others" },
  ];

  const languageoptions = [
    { label: "Tamil", value: "tamil" },
    { label: "English", value: "english" },
    { label: "Telugu", value: "telugu" },
    { label: "Malayalam", value: "malayalam" },
    { label: "Kannada", value: "kannada" },
    { label: "Hindi", value: "hindi" },
  ];

  const handleChange = (e) => {
    SetCandidateProfile((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(candidateProfile);
  };
  return (
    <>
      <section className="lg:hidden">
        <div className="flex flex-col justify-evenly p-5">
          <h1 className="text-2xl">Profile</h1>

          {/* add profile */}
          <div className="flex justify-center">
            <div className="p-5 rounded-full border border-gray-300 flex flex-col items-center">
              <p>
                <FaPlus />
              </p>
              <p>Add Profile</p>
            </div>
          </div>

          <form action="">
            <div>
              <p>
                <label htmlFor="dob">Date of Birth:</label>{" "}
              </p>
              <p>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="border border-gray-300 p-1 rounded-md w-full"
                  onChange={handleChange}
                  value={candidateProfile.dob}
                />{" "}
              </p>
            </div>

            <div>
              <label htmlFor="gender">Gender:</label>
              <Select options={genders} />
            </div>

            <div>
              <label htmlFor="language">Language:</label>
              {/* <Select options={languages} /> */}
              <MultiSelect
                options={languageoptions}
                value={candidateProfile.language}
                // name="language"
                onChange={handleChange}
                labelledBy="Select"
              />
            </div>

            <div>
              <p>
                <label htmlFor="city">City:</label>
              </p>
              <p>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="border border-gray-300 p-1 rounded-md w-full"
                  onChange={handleChange}
                  value={candidateProfile.city}
                />
              </p>
            </div>
            <div>
              <p>
                <label htmlFor="state">State:</label>{" "}
              </p>

              <p>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="border border-gray-300 p-1 rounded-md w-full"
                  onChange={handleChange}
                  value={candidateProfile.state}
                />
              </p>
            </div>
            <div>
              <p>
                <label htmlFor="pincode">Pincode:</label>
              </p>
              <p>
                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  className="border border-gray-300 p-1 rounded-md w-full"
                  onChange={handleChange}
                  value={candidateProfile.pincode}
                />
              </p>
            </div>

            <button type="submit" className="bg-blue-600 p-2 text-white" onClick={formSubmit}>
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
