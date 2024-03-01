import React, { useState } from "react";
import "./ReportCards.css";
import image1 from "../../Assets/Image/Gheorghita_fruitVeg_adobe_hero_700x530px.jpg";
import image2 from "../../Assets/Image/822fe09b6fc030a16364934bf2ed06ec.webp";
import image3 from "../../Assets/Image/NEWS2FARMER.jpg";
import image4 from "../../Assets/Image/download.jpg";
import { Link } from "react-router-dom";

const ReportCrads = () => {
  const [carddetails, setCarddetails] = useState([
    {
      cardTitle: "Total Products",
      cardValue: 100,
      cardview: "Products",
      Report: 10,
      image: image1,
      // color: "#2AA31F",
    },
    {
      cardTitle: "Free Templates",
      cardValue: 21,
      cardview: "Veggies",
      Report: 10,
      // color: "red",
      image: image2,
    },
    {
      cardTitle: "Paid Template",
      cardValue: 12,
      cardview: "Seeds",
      Report: 10,
      // color: "yellow",
      image: image3,
    },
    {
      cardTitle: "Customize Template",
      cardValue: 10,
      cardview: "Fertilizer",
      Report: 10,
      // color: "white",
      image: image4,
    },
  ]);

  return (
    <>
      {carddetails.map((item) => {
        return (
          <div className="box">
            <div className="report_card">
              <div className="card_top">
                <div className="card_top_left">
                  <img src={item.image} alt="image" />
                </div>
                <div className="card_top_right">
                  <span className="cardTitle">{item.cardTitle}</span>
                  <span className="quantity">{item.cardValue}</span>
                </div>
              </div>
              <div className="card_bottom">
                <button>
                  <Link to={"/Feeding"}></Link>
                  Add New
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ReportCrads;
