import React, { useState } from "react";
import "./Table.css";
import Dropdown from "../Dropdown/Dropdown";

const Table = () => {
  const [values, setValues] = useState(50);
  const dropdown_values = [
    {
      value: 10,
    },
    {
      value: 50,
    },
    {
      value: 100,
    },
  ];

  const handleChange = ({ target: { value } }) => {
    setValues(value);
  };

  return (
    <div className="table_container">
      <div className="table_top">
        <h3>User Details</h3>
      </div>
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
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
