import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useNavigation } from "../../hooks/UseNavigate";
const Table = (TableValues) => {
    const navigate = useNavigate();

    const handleRowClick = (e) => {
        if (e.target.tagName !== "INPUT") {
            navigate("/dashboard/products/singleproduct");
        }
    };

    const { headers, headerValues } = TableValues;
    return (
        <table>
            <thead>
                <tr>
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
                        <tr onClick={handleRowClick}>
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
