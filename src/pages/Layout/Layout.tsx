import Nav from "./Nav"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="bg-gradient-light dark:bg-gradient-dark theme-transition min-h-screen transition-colors">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Layout