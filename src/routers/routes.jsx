import Sidebar from "../pages/Home/dashboard";
import { EducationDetails } from "../pages/Home/educationdetails";
import Login from "../pages/Home/login";
import { ProfileForm } from "../pages/Home/profileform";
import { Register } from "../pages/Home/register";
import Day from "../pages/Home/days";
const Pages = [
  {
    title: "login",
    path: "",
    element: <Login />,
  },
  {
    title: "profile",
    path: "register",
    element: <Register />,
  },
  {
    title: "home",
    path: "home",
    element: <Sidebar />,
  },

];

export default Pages;
