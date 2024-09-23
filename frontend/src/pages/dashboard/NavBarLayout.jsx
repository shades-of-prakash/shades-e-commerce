import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/UseTheme";
const NavBarLayout = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();
  const handleDocumentClick = (event) => {
    if (!event.target.closest(".profile")) {
      setIsProfileOpen(false);
    }
  };
  document.addEventListener("click", handleDocumentClick);
  return (
    <div className="dashboard_navbar flex-space">
      <p>{currentPath}</p>
      <div className="nav_options flex-space">
        <ion-icon
          name={isDark ? "sunny-outline" : "moon-outline"}
          onClick={toggleTheme}
        ></ion-icon>
        <ion-icon name="notifications-outline"></ion-icon>
        <div className="profile flex-space">
          <div
            className="pic "
            onClick={() => setIsProfileOpen((prev) => !prev)}
          >
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
