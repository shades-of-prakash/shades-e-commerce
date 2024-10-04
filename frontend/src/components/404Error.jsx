import React from "react";
import { useRouteError } from "react-router-dom";
import { useNavigation } from "../hooks/UseNavigate";

const Error404 = () => {
  let error = useRouteError();
  const { goToPath } = useNavigation();
  console.error(error);
  return (
    <div className="error_404_main flex-flex-column">
      <div className="error_404 flex-center">
        <div className="flex-center">
          <span>4</span>
          <img src="/assets/404.jpg" className="zero" />
          <span>4</span>
        </div>
      </div>
      <div className="error_content flex-flex-column">
        <h1>Oops! Page not found</h1>
        <button
          onClick={() => {
            goToPath("dashboard");
          }}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default Error404;
