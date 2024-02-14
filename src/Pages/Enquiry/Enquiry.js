import React, { useState } from "react";
import "./Enquiry.css";
import Table from "../../Components/Table/Table";

const Enquiry = () => {
  const [enquiry_list, setEnquiry_list] = useState([
    {
      id: 1,
      name: "Web Template",
      email: "abc@gmail.com",
      quantity: 1,
    },
    {
      id: 2,
      name: "Web Template",
      email: "abc@gmail.com",
    },
    {
      id: 3,
      name: "Web Template",
      email: "abc@gmail.com",
      quantity: 1,
    },
    {
      id: 4,
      name: "Web Template",
      email: "abc@gmail.com",
      quantity: 1,
    },
    {
      id: 5,
      name: "Web Template",
      email: "abc@gmail.com",
      quantity: 1,
    },
    {
      id: 6,
      name: "Web Template",
      email: "abc@gmail.com",
      quantity: 1,
    },
  ]);

  return (
    <div>
      <h1>Enquiry</h1>
      <Table data={enquiry_list} />
    </div>
  );
};

export default Enquiry;
