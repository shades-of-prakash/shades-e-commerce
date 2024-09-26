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
                    "QTY left",
                    "Status",
                ]}
                headerValues={[
                    {
                        id: "#124242",
                        product: "Full Charge",
                        brand: "HighLander",
                        category: "Cargo",
                        variants: "S,X,XL,XXL",
                        price: 1234,
                        sku: "XYX-HIGH-BLK",
                        qtyleft: 12,
                        status: "In Stock",
                    },
                ]}
            />
        </div>
    );
};

export default Products;
