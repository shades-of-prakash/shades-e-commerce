import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useNavigation } from "../../hooks/UseNavigate.jsx";
const BreadCrumbs = () => {
    const location = useLocation();
    const fullPath = location.pathname.split("/");
    const lastItem = fullPath[fullPath.length - 1];
    const { goToPath, goBack } = useNavigation();
    const arrayWithoutSpaces = fullPath.filter((item) => item.trim() !== "");
    return (
        <div className="breadCrumbs">
            <div className="present_bread">
                {arrayWithoutSpaces.length > 2 && (
                    <div className="flex-center" onClick={goBack}>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                )}
                <p>
                    {lastItem[0].toUpperCase() +
                        lastItem.slice(1, lastItem.length)}
                </p>
            </div>
            <div className="flex">
                {fullPath.map((item, index) => {
                    const pathSoFar = fullPath.slice(0, index + 1).join("/");
                    const active = index === fullPath.length - 1;
                    if (item) {
                        return (
                            <React.Fragment key={index}>
                                <span
                                    className={active ? "breadActive" : ""}
                                    onClick={() => {
                                        if (!active && item !== "dashboard") {
                                            goToPath(`${pathSoFar}`);
                                        }
                                    }}
                                >
                                    {item}
                                </span>
                                {active ? (
                                    ""
                                ) : (
                                    <ion-icon name="chevron-forward-outline"></ion-icon>
                                )}
                            </React.Fragment>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default BreadCrumbs;
