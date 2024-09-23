import React, { Suspense } from "react";
import Sidemenu from "../../components/Sidemenu.jsx";
import { Outlet } from "react-router-dom";
import NavBarLayout from "./NavBarLayout.jsx";

const Layout = () => {
  return (
    <div className="flex layout">
      <Sidemenu />
      <div className="side_Layout">
        <NavBarLayout />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
