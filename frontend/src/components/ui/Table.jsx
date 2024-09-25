import React from "react";

const Table = (TableValues) => {
    const { headers, headerValues, headerClassName, valuesClassName } =
        TableValues;
    return (
        <table>
            <thead>
                <tr className={headerClassName}>
                    {headers.map((header, index) => {
                        return (
                            <React.Fragment key={index}>
                                <th>
                                    {index === 0 && <input type="checkbox" />}
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
                        <tr className={valuesClassName}>
                            {values.values.map((value, index) => {
                                return <td key={index}>{value}</td>;
                            })}
                        </tr>
                    </tbody>
                );
            })}
        </table>
    );
};

export default Table;
