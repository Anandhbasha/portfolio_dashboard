import React, { useState } from "react";
import "./Sidebar.css";
import { Link, useParams } from "react-router-dom";

const Sidebar = () => {
  const { params } = useParams();

  const [activeTab, setActiveTab] = useState("");
  // setActiveTab(tabName);

  function calling(tab) {
    setActiveTab(tab);
  }
  return (
    <ul className="sidebar_menu">
      <li
        onClick={() => {
          calling("Dashboard");
        }}
        className={`${activeTab == "Dashboard" && "active"}`}
      >
        <Link to={"/"}>
          <i class="fa-solid fa-table-columns"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <li
        onClick={() => {
          calling("UserList");
        }}
        className={`${activeTab == "UserList" && "active"}`}
      >
        <Link to={"/UserList"}>
          <i class="fa-solid fa-user"></i>
          <span>User_list</span>
        </Link>
      </li>
      <li
        onClick={() => {
          calling("Enquiry");
        }}
        className={`${activeTab == "Enquiry" && "active"}`}
      >
        <Link to={"/Enquiry"}>
          <i class="fa-solid fa-handshake-angle"></i>
          <span>Enquiry</span>
        </Link>
      </li>
      <li
        onClick={() => {
          calling("Feeding");
        }}
        className={`${activeTab == "Feeding" && "active"}`}
      >
        <Link to={"/Feeding"}>
          <i class="fa-solid fa-file-export"></i>
          <span>Feeding</span>
        </Link>
      </li>
      <li
        onClick={() => {
          calling("Products");
        }}
        className={`${activeTab == "Products" && "active"}`}
      >
        <Link to={"/Products"}>
          <i class="fa-solid fa-box-open"></i>
          <span>Products</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
