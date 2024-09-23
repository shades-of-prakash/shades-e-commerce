import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="main">
      Products
      <Link to="addProduct">
        <button>add product</button>
      </Link>
    </div>
  );
};

export default Products;
