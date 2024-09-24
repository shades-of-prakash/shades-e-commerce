import React, { Suspense } from "react";
import Sidemenu from "../../components/Sidemenu.jsx";
import { Outlet } from "react-router-dom";
import NavBarLayout from "./NavBarLayout.jsx";
import { useTheme } from "../../hooks/UseTheme.jsx";
import BreadCrumbs from "../../components/ui/BreadCrumbs.jsx";

const Layout = () => {
    const { isDark } = useTheme();
    return (
        <div className={` layout flex-center ${isDark ? "dark" : "light"}`}>
            <Sidemenu />
            <div className="side_Layout">
                <NavBarLayout />
                <BreadCrumbs />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
