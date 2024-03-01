import React, { useState } from "react";
import "./Table.css";
import Dropdown from "../Dropdown/Dropdown";

const Table = ({ data }) => {
  const [show_data, setShow_data] = useState(5);
  const dropdown_values = [
    {
      value: 2,
    },
    {
      value: 5,
    },
    {
      value: 10,
    },
  ];

  const handleChange = ({ target: { value } }) => {
    setShow_data(value);
  };

  var maxValue = 0;
  var maxValueIndex = 0;

  data?.forEach((item, idx) => {
    const numKeys = Object.keys(item).length;

    if (numKeys > maxValue) {
      maxValue = numKeys;
      maxValueIndex = idx;
    }
  });

  let table_heading = data?.find((_, index) => index === maxValueIndex);
  return (
    <div className="table_container">
      <div className="table_middle">
        <label>Show</label>
        <Dropdown
          values={show_data}
          handleChange={handleChange}
          dropdown_values={dropdown_values}
        />
        entries
      </div>
      <table className="table" id="products">
        <thead>
          <tr>
            {Object.keys(table_heading)?.map((heading) => {
              return <th style={{ textTransform: "uppercase" }}>{heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data?.slice(0, show_data)?.map((rowdata, rowindex) => {
            return (
              <tr key={rowindex}>
                {Object.keys(table_heading)?.map((head, colindex) => {
                  return (
                    <td key={colindex}>
                      {!rowdata[head] ? "-" : rowdata[head]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
