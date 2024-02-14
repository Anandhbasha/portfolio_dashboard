import React, { useEffect, useState } from "react";
import "./Enquiry.css";
import Table from "../../Components/Table/Table";
import axios from "axios";

const Enquiry = () => {
  const [enquiry_list, setEnquiry_list] = useState([{}]);
  useEffect(() => {
    const get_Enquirydata = async () => {
      const { data } = await axios.get(``);
      console.log(data);
      setEnquiry_list(data?.data);
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
