import React, { Suspense } from "react";
import Sidemenu from "../../components/Sidemenu.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import NavBarLayout from "./NavBarLayout.jsx";
import { useTheme } from "../../hooks/UseTheme.jsx";
import BreadCrumbs from "../../components/ui/BreadCrumbs.jsx";
const Layout = () => {
    const navigate = useNavigate();
    const { isDark } = useTheme();
    return (
        <div className={` layout flex-center ${isDark ? "dark" : "light"}`}>
            <Sidemenu />
            <div className="side_Layout">
                <NavBarLayout />
                <div className="button_layout  flex-space">
                    <BreadCrumbs />
                    <button
                        className="flex-space"
                        onClick={() => {
                            navigate("/dashboard/products/addproduct");
                        }}>
                        <ion-icon name="add-outline"></ion-icon>
                        Add Product
                    </button>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
