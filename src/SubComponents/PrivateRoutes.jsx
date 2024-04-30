import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  // const token = JSON.parse(localStorage.getItem("auth"));
  const token = true;
  
  console.log(token === true);

  let auth = { token: token };
  
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
