import React from "react";
import Table from "../../Components/Table/Table";
import "./Feeding.css";

const Feeding = () => {
  return (
    <div className="feeds">
      <h1>Feeding</h1>
      <div className="feed">
        <div className="input_area">
          <label>Product Name</label>
          <input type="text" />
        </div>
        <div className="input_area">
          <label>Product Name</label>
          <input type="text" />
        </div>
        <div className="input_area">
          <label>Product Name</label>
          <input type="text" />
        </div>
        <div className="input_area">
          <label>Product Name</label>
          <input type="text" />
        </div>
        <div className="input_area">
          <label>Product Name</label>
          <input type="text" />
        </div>
        <div className="input_area">
          <button> Submit </button>
        </div>
      </div>
    </div>
  );
};

export default Feeding;
