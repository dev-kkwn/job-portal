import Pages from "./routes";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  const pageRoutes = Pages.map(({ path, title, element }) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });
  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
