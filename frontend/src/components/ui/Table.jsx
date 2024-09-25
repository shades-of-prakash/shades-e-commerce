import React from "react";

const Table = (TableValues) => {
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
                                    {/* {index === 0 && <input type="checkbox" />} */}
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
                            <th>
                                <input type="checkbox" name="" id="" />
                            </th>
                            {Object.entries(values).map(
                                ([key, value], index) => (
                                    <td key={index} className={key}>
                                        {value}
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
