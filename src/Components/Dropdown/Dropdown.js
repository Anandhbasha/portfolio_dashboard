import React from "react";

const Dropdown = (props) => {
  return (
    <select value={props.values} onChange={props.handleChange}>
      {props.dropdown_values.map((item) => {
        return <option value={item.value}>{item.value}</option>;
      })}
    </select>
  );
};

export default Dropdown;
