import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <div className="table_container">
      <div className="table_top">
        <h3>User Details</h3>
      </div>
      <div className="table_middle">
        <div className="left_side">
          <label>Show</label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              10
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button class="dropdown-item" type="button">
                10
              </button>
              <button class="dropdown-item" type="button">
                50
              </button>
              <button class="dropdown-item" type="button">
                100
              </button>
            </div>
          </div>
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
