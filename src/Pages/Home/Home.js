import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ReportCrads from "../../Components/ReportCards/ReportCrads";
import Enquiry from "../Enquiry/Enquiry";

const Home = () => {
  return (
    <div className="home">
      <h1>Dashboard</h1>
      <div className="section_top">
        <ReportCrads />
      </div>
      <div className="enquiry_home">
        <Enquiry />
      </div>
    </div>
  );
};

export default Home;
