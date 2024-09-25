import React from "react";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      SingleProudct
      <button onClick={() => navigate(-1)}>GO BACK</button>
    </div>
  );
};

export default SingleProduct;
