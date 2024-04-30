import { useState } from "react";
import Select from "react-select";

export function EducationDetails() {
  const [EducationDetails, SetEducationDetails] = useState({
    qualification: "",
    course: "",
    specialization: "",
    education_type: "",
    course_duration_from: "",
    course_duration_to: "",
    percentage: "",
  });

  const handleChange = (e) => {
    SetEducationDetails((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const selectChange = (selectedOption, actionMeta) => {
    if (selectedOption) {
      SetEducationDetails((prevState) => ({
        ...prevState,
        [actionMeta.name]: selectedOption.value,
      }));
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(EducationDetails);
  };

  const educationtypes = [
    { value: "Full time", label: "Full Time" },
    { value: "Part time", label: "Part Time" },
    { value: "Distance", label: "Distance" },
  ];
  const educationoptions = [
    { value: "Doctorate/PhD", label: "Doctorate/PhD" },
    { value: "Masters/Post-Graduation", label: "Masters/Post-Graduation" },
    { value: "Graduation/Diploma", label: "Graduation/Diploma" },
    { value: "HSC", label: "HSC" },
    { value: "SSLC", label: "SSLC" },
  ];

  const coursetooptions = [];
  obj = {};
  const date = new Date();
  let y = date.getFullYear();
  for (var i = y; i >= 2019; i--) {
    var obj = {};

    obj["value"] = i;
    obj["label"] = i;
    coursetooptions.push(obj);
  }

  const coursefromoptions = [];
  obj = {};
  for (var j = 2019; j <= y; j++) {
    var obj = {};
    obj["label"] = j;
    obj["value"] = j;
    coursefromoptions.push(obj);
  }

  return (
    <>
      <section className="lg:hidden">
        <div className="p-5">
          <h1 className="text-2xl">Profile</h1>

          <form action="">
            <div className="my-3">
              <p>
                <label htmlFor="qualification">Qualification:</label>{" "}
              </p>
              <p>
                <Select
                  options={educationoptions}
                  name="qualification"
                  id="qualification"
                  onChange={selectChange}
                />
              </p>
            </div>

            <div className="my-3">
              <p>
                <label htmlFor="course">Course:</label>
              </p>
              <p>
                {" "}
                <input
                  type="text"
                  name="course"
                  id="course"
                  className="border border-gray-300 p-1 rounded-md w-full"
                  onChange={handleChange}
                  value={EducationDetails.course}
                />{" "}
              </p>
            </div>

            <div className="my-3">
              <label htmlFor="specialization">Specialization:</label>

              <input
                type="text"
                name="specialization"
                id="specialization"
                className="border border-gray-300 p-1 rounded-md w-full"
                onChange={handleChange}
                value={EducationDetails.specialization}
              />
            </div>

            <div className="my-3">
              <p>
                <label htmlFor="education_type">Education Type:</label>
              </p>
              <p>
                <Select options={educationtypes} onChange={selectChange} name="education_type" />
              </p>
            </div>

            <div className="my-3">
              <p>
                <label htmlFor="percentage">Percentage:</label>{" "}
              </p>

              <p>
                <input
                  type="text"
                  name="percentage"
                  id="percentage"
                  className="border border-gray-300 p-1 rounded-md w-full"
                  onChange={handleChange}
                  value={EducationDetails.percentage}
                />
              </p>
            </div>

            <div className="my-3">
              <p>
                <label htmlFor="course_duration">Course Duration:</label>
              </p>
              <p className="flex justify-around">
                {/* two selects */}
                <Select
                  options={coursefromoptions}
                  placeholder="From"
                  onChange={selectChange}
                  name="course_duration_from"
                />
                <Select
                  options={coursetooptions}
                  placeholder="To"
                  onChange={selectChange}
                  name="course_duration_to"
                />
              </p>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 p-2 text-white rounded-lg"
                onClick={formSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
