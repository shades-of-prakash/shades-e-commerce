import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/ui/Table";

const Products = () => {
    return (
        <div className="main">
            <Table
                headers={[
                    "Id",
                    "Product",
                    "Brand",
                    "Category",
                    "Variants",
                    "Price",
                    "SKU",
                    "Stock",
                    "Status",
                ]}
                headerValues={[
                    {
                        id: "#124242",
                        product: "Full Charge",
                        brand: "HighLander",
                        category: "Cargo",
                        sku: "S,X,XL,XXL",
                        stock: 123,
                        status: "available",
                    },
                ]}
                headerClassName={"product-table-header"}
                valuesClassName={"product-table-values"}
            />
        </div>
    );
};

export default Products;
