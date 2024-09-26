import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Table = (TableValues) => {
    const navigate = useNavigate();

    const handleRowClick = () => {
        navigate("/dashboard/products/singleproduct");
    };

    const { headers, headerValues, headerClassName, valuesClassName } =
        TableValues;
    return (
        <table>
            <thead>
                <tr className={headerClassName}>
                    <th>
                        <input type="checkbox" />
                    </th>
                    {headers.map((header, index) => {
                        return (
                            <React.Fragment key={index}>
                                <th>
                                    <span>{header}</span>
                                </th>
                            </React.Fragment>
                        );
                    })}
                </tr>
            </thead>
            {headerValues.map((values, index) => {
                return (
                    <tbody key={index}>
                        <tr
                            className={valuesClassName}
                            onClick={handleRowClick}>
                            <th>
                                <input type="checkbox" name="" id="" />
                            </th>
                            {Object.entries(values).map(
                                ([key, value], index) => (
                                    <td key={index} className={"table_" + key}>
                                        <span>{value}</span>
                                    </td>
                                )
                            )}
                        </tr>
                    </tbody>
                );
            })}
        </table>
    );
};

export default Table;
