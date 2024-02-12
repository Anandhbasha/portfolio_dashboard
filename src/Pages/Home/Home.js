import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Feeding from "../Feeding/Feeding";
import Products from "../Products/Products";
import ReactApexChart from "react-apexcharts";
import Sales from "../../Components/Charts/Sales";
import User from "../../Components/Charts/User";
import Enquirychart from "../../Components/Charts/Enquirychart";
import Months from "../../Components/Charts/Months";

const Home = () => {
  return (
    <div className="home">
      <h1>Dashboard</h1>
      <div className="top_components">
        <div className="feed_components">
          <Link to={"/Feeding"}>Feeding</Link>
        </div>
        <div className="products_components">
          <Link to={"/Products"}>Products</Link>
        </div>
      </div>
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

export default Home;
