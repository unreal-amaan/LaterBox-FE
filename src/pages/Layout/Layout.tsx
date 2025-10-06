import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Nav = lazy(() => import("./Nav"));

const Layout = () => {
  return (
    <div className="bg-gradient-light dark:bg-gradient-dark theme-transition min-h-screen transition-colors">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
