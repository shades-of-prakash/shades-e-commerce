import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/UseTheme";
import BreadCrumbs from "../../components/ui/BreadCrumbs";
const NavBarLayout = () => {
    const { isDark, toggleTheme } = useTheme();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const location = useLocation();
    const fullPath = location.pathname.split("/");
    const currentPath = fullPath.pop();
    const handleDocumentClick = (event) => {
        if (!event.target.closest(".profile")) {
            setIsProfileOpen(false);
        }
    };
    const UpperCurrentPath =
        currentPath[0].toUpperCase() + currentPath.slice(1, currentPath.length);
    document.addEventListener("click", handleDocumentClick);
    return (
        <div className="dashboard_navbar flex-space">
            <div className="search flex">
                <ion-icon name="search"></ion-icon>
                <input
                    type="text"
                    placeholder={"Search " + `${UpperCurrentPath}`}
                />
            </div>
            <div className="nav_options flex-space">
                <ion-icon
                    name={isDark ? "sunny-outline" : "moon-outline"}
                    onClick={toggleTheme}></ion-icon>
                <ion-icon name="notifications-outline"></ion-icon>
                <div className="profile flex-space">
                    <div
                        className="pic "
                        onClick={() => setIsProfileOpen((prev) => !prev)}>
                        <img src="/assets/profile.jpg" alt="" />
                    </div>
                    {isProfileOpen && (
                        <div className="details">
                            <p className="username">Shadesofprakash</p>
                            <p className="role">Admin</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBarLayout;
