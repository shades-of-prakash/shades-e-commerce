import React, {
    useState,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useCallback,
} from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/dashBoard.css";
import { categories } from "../utils/sideMenuCategories.js";

const SidemenuContext = createContext();

const Sidemenu = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [activeId, setActiveId] = useState(0);
    const location = useLocation();

    const findCategoryByPath = useCallback((categories, path) => {
        for (const category of categories) {
            if (
                category.path === path ||
                category.path.split("/").includes(path)
            ) {
                return category;
            }
        }
        return null;
    }, []);

    useEffect(() => {
        const currentPath = location.pathname.split("/").pop();
        const currentCategory = findCategoryByPath(categories, currentPath);

        if (currentCategory) {
            setActiveId(currentCategory.id);
        }
    }, [location, findCategoryByPath]);

    const contextValue = useMemo(
        () => ({ isExpanded, setIsExpanded, activeId, setActiveId }),
        [isExpanded, activeId]
    );

    return (
        <SidemenuContext.Provider value={contextValue}>
            <div
                className={`sidemenu ${isExpanded ? "" : "sideMenuCollapsed"}`}>
                <div className="logo_container">
                    <h1 className="logop">{isExpanded ? "SHADES" : "S"}</h1>
                    <ion-icon
                        name={
                            isExpanded
                                ? "chevron-back-outline"
                                : "chevron-forward-outline"
                        }
                        onClick={() => setIsExpanded((prev) => !prev)}
                    />
                </div>
                <MenuItems categories={categories} />
            </div>
        </SidemenuContext.Provider>
    );
};

const MenuItems = React.memo(({ categories, isSubMenu = false }) => (
    <ul className={isSubMenu ? "subMenu" : "menuContainer"}>
        {categories.map((category) => (
            <MenuItem
                category={category}
                key={category.id}
                isSubMenu={isSubMenu}
            />
        ))}
    </ul>
));

const MenuItem = React.memo(({ category, isSubMenu }) => {
    const { name, path, svg, solid_svg, id, sub_categories } = category;
    const { isExpanded, setIsExpanded, activeId, setActiveId } =
        useContext(SidemenuContext);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const isActive = activeId === id;

    const handleClick = useCallback(() => {
        setActiveId(id);
        if (sub_categories && sub_categories.length > 0) {
            setIsExpanded(true);
            setIsSubMenuOpen((prev) => !prev);
        }
    }, [id, setActiveId, setIsExpanded, sub_categories]);

    return (
        <>
            <li
                className={`${isSubMenu ? "subMenuItem" : "menuItem"} ${
                    isActive ? "menuItemActive" : ""
                }`}
                onClick={handleClick}>
                <Link
                    to={`/dashboard/${path}`}
                    style={{
                        color: "black",
                        textDecoration: "none",
                        width: "100%",
                        padding: "10px",
                    }}>
                    <div className="category">
                        <ion-icon
                            rel="preload"
                            name={isActive ? solid_svg : svg}
                            className="ionicon"
                        />
                        {isExpanded && <p>{name}</p>}
                    </div>
                    {sub_categories &&
                        sub_categories.length > 0 &&
                        isExpanded && (
                            <ion-icon
                                name={
                                    isSubMenuOpen
                                        ? "chevron-up-outline"
                                        : "chevron-down-outline"
                                }
                                className="dropdown_img"
                            />
                        )}
                </Link>
            </li>

            {isSubMenuOpen &&
                sub_categories &&
                sub_categories.length > 0 &&
                isExpanded && (
                    <MenuItems categories={sub_categories} isSubMenu={true} />
                )}
        </>
    );
});

export default React.memo(Sidemenu);
