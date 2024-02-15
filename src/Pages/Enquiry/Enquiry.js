import React, { useEffect, useState } from "react";
import "./Enquiry.css";
import Table from "../../Components/Table/Table";
import axios from "axios";
import { backendapi } from "../../App";

const Enquiry = () => {
  const [enquiry_list, setEnquiry_list] = useState([{}]);
  useEffect(() => {
    const get_Enquirydata = async () => {
      const {
        data: { result },
      } = await axios.get(`${backendapi}/get_contacts`);

      setEnquiry_list(result);
    };

    get_Enquirydata();
  }, []);

  return (
    <div>
      <h1>Enquiry</h1>
      <Table data={enquiry_list} />
    </div>
  );
};

export default Enquiry;
