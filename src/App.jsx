import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Home/login";
import PrivateRoutes from "./SubComponents/PrivateRoutes";
import Homepage from "./pages/Home/Homepage";
import Day from "./pages/Home/days";
import CandidateSearch from "./pages/Home/candidateSearch";
import UI_UX from "./pages/Home/ui_ux";
import Recruit from "./pages/Home/recruit";
import Location from "./pages/Home/location";
import RecruiterProfile from "./pages/Home/recruiterProfile";
import { Register } from "./pages/Home/register";
import FAQ from "./pages/Home/faq";
import Support from "./pages/Home/support";
import UI_UX_Details from "./pages/Home/ui_ux_details";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Router /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/homepage" element={<Homepage />}>
              <Route path="/homepage/days" element={<Day />} />
              <Route path="/homepage/candidate" element={<CandidateSearch />} />
              <Route path="/homepage/jobpost" element={<UI_UX />} />
              <Route path="/homepage/viewprofile" element={<UI_UX_Details />} />
              <Route path="/homepage/managerecruiter" element={<Recruit />} />
              <Route path="/homepage/managelocation" element={<Location />} />
              <Route path="/homepage/profile" element={<RecruiterProfile />} />
              <Route path="/homepage/faq" element={<FAQ />} />
              <Route path="/homepage/support" element={<Support />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
