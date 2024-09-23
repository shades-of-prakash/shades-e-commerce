import React, { Suspense } from "react";
import Sidemenu from "../../components/Sidemenu.jsx";
import { Outlet } from "react-router-dom";
import NavBarLayout from "./NavBarLayout.jsx";
import { useTheme } from "../../hooks/UseTheme.jsx";

const Layout = () => {
  const { isDark } = useTheme();
  return (
    <div className={`flex layout ${isDark ? "dark" : "light"}`}>
      <Sidemenu />
      <div className="side_Layout">
        <NavBarLayout />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
