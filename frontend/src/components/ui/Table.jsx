import React from "react";

const Table = (TableValues) => {
  const { headers, headerValues } = TableValues;
  console.log(headers);
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      {headerValues.map((values, index) => {
        return (
          <tbody key={index}>
            <tr>
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
