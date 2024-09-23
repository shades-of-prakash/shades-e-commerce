import React from "react";
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="main">
      Addproduct
      <button onClick={handleGoBack}>Back to Products</button>
    </div>
  );
};

export default Addproduct;
