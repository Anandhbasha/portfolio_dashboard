import React, { useState } from "react";
import "./Table.css";
import Dropdown from "../Dropdown/Dropdown";

const Table = ({ data, table_heading }) => {
  console.log(data);
  const [values, setValues] = useState(2);
  const dropdown_values = [
    {
      value: 2,
    },
    {
      value: 5,
    },
    {
      value: 1,
    },
  ];

  const handleChange = ({ target: { value } }) => {
    setValues(value);
  };

  return (
    <div className="table_container">
      <div className="table_middle">
        <div className="left_side">
          <label>Show</label>
          <Dropdown
            values={values}
            handleChange={handleChange}
            dropdown_values={dropdown_values}
          />
          entries
        </div>
        <div className="right_side">
          <label>Search:</label>
          <input type="text" />
        </div>
      </div>
      <table class="table table-striped table-dark">
        <thead>
          {data.slice(0, 1).map((item) => {
            console.log("Heading data-->>>", item);
            return (
              <tr>
                {Object.keys(item).map((heading) => {
                  return (
                    <th style={{ textTransform: "uppercase" }}>{heading}</th>
                  );
                })}
              </tr>
            );
          })}
          {/* {table_heading.map((heading) => {
              return <th scope="col">{heading}</th>;
            })} */}
        </thead>
        <tbody>
          {data.slice(0, values).map((item) => {
            return (
              <tr>
                {Object.values(item).map((datas, index) => {
                  return <td>{datas}</td>;
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
