import React, { useState, createContext, useContext, useEffect } from "react";
import "../utils/styles/dashBoard.css";
import { categories } from "../utils/sideMenuCategories.js";
import { Link, useLocation } from "react-router-dom";
const SidemenuContext = createContext();
const Sidemenu = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeId, setActiveId] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.split("/").pop();
    console.log(currentPath);
    const currentCategory = findCategoryByPath(categories, currentPath);
    console.log(currentCategory);
    if (currentCategory) {
      setActiveId(currentCategory.id);
    }
  }, [location]);

  const findCategoryByPath = (categories, path) => {
    for (const category of categories) {
      if (category.path === path || category.path.split("/").includes(path)) {
        return category;
      }
    }
    return null;
  };

  return (
    <SidemenuContext.Provider
      value={{ isExpanded, setIsExpanded, activeId, setActiveId }}
    >
      <div className={`sidemenu ${isExpanded ? "" : "sideMenuCollapsed"}`}>
        <div className="logo_container">
          <p className="logop">{isExpanded ? "SHADES" : "S"}</p>
          <img
            className="expander"
            src={`/assets/icons/${
              isExpanded ? "chevron-left.svg" : "chevron-right.svg"
            }`}
            alt="arrow"
            onClick={() => setIsExpanded((prev) => !prev)}
          />
        </div>
        <MenuItems categories={categories} />
      </div>
    </SidemenuContext.Provider>
  );
};

function MenuItems({ categories, isSubMenu = false }) {
  return (
    <ul className={isSubMenu ? "subMenu" : "menuContainer"}>
      {categories.map((category) => (
        <MenuItem category={category} key={category.id} isSubMenu={isSubMenu} />
      ))}
    </ul>
  );
}

function MenuItem({ category, isSubMenu }) {
  const { name, path, svg, solid_svg, id, sub_categories } = category;
  const { isExpanded, setIsExpanded, activeId, setActiveId } =
    useContext(SidemenuContext);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const isActive = activeId === id;

  const handleClick = () => {
    setActiveId(id);
    if (sub_categories && sub_categories.length > 0) {
      setIsExpanded(true);
      setIsSubMenuOpen(!isSubMenuOpen);
    }
  };
  return (
    <>
      <Link
        to={`/dashboard/${path}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <li
          className={`${isSubMenu ? "subMenuItem" : "menuItem"} ${
            isActive ? "menuItemActive" : ""
          }`}
          onClick={handleClick}
        >
          <div className="category">
            <ion-icon
              name={isActive ? solid_svg : svg}
              className="ionicon"
            ></ion-icon>
            {isExpanded && <p>{name}</p>}
          </div>
          {sub_categories && sub_categories.length > 0 && isExpanded && (
            <img
              className="dropdown_img"
              src={`/assets/icons/${
                isSubMenuOpen ? "chevron-top.svg" : "chevron-down.svg"
              }`}
              alt="expand"
            />
          )}
        </li>
      </Link>
      {isSubMenuOpen &&
        sub_categories &&
        sub_categories.length > 0 &&
        isExpanded && (
          <MenuItems categories={sub_categories} isSubMenu={true} />
        )}
    </>
  );
}

export default Sidemenu;
