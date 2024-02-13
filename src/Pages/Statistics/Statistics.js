import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import User from "../../Components/Charts/User";
import Sales from "../../Components/Charts/Sales";
import Enquirychart from "../../Components/Charts/Enquirychart";
import Months from "../../Components/Charts/Months";

const Statistics = () => {
  return (
    <div>
      <h1>Statistics</h1>
      <div className="chart_page">
        <div className="sales_chart">
          <User />
        </div>
        <div className="sales_chart">
          <Sales />
        </div>
        <div className="sales_chart">
          <Enquirychart />
        </div>
        <div className="sales_chart">
          <Months />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
