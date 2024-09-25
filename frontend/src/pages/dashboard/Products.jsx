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
                        values: [
                            "#123",
                            "Full Cargo",
                            "HighLander",
                            "Cargo",
                            "S,X,XL,XXL",
                            2000,
                            "XYX-Y-X-X",
                            "In-stock",
                            "Stock",
                        ],
                    },
                ]}
                headerClassName={"product-table-header"}
                valuesClassName={"product-table-values"}
            />
        </div>
    );
};

export default Products;
