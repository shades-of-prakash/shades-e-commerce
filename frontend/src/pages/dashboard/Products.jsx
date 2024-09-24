import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/ui/Table";

const Products = () => {
  return (
    <div className="main">
      Products
      <Table
        headers={["Product", "Category", "Price", "SKU", "Stock", "Status"]}
        headerValues={[
          {
            values: [1, 2, 3],
          },
          {
            values: [2, 3, 4],
          },
        ]}
        headerClassName={"test"}
      />
    </div>
  );
};

export default Products;
