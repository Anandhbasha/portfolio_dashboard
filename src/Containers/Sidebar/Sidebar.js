import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="sidebar_menu">
      <Link to={"/"}>
        <li>
          <i class="fa-solid fa-table-columns"></i>Dashboard
        </li>
      </Link>
      <Link to={"/UserList"}>
        <li>
          <i class="fa-solid fa-user"></i>User_list
        </li>
      </Link>
      <Link to={"/Statistics"}>
        <li>
          <i class="fa-solid fa-chart-line"></i>Statistics
        </li>
      </Link>
      <Link to={"/Enquiry"}>
        <li>
          <i class="fa-solid fa-handshake-angle"></i>Enquiry
        </li>
      </Link>
      <Link to={"/Feeding"}>
        <li>
          <i class="fa-solid fa-file-export"></i>Feeding
        </li>
      </Link>
      <Link to={"/Products"}>
        <li>
          <i class="fa-solid fa-box-open"></i>Products
        </li>
      </Link>
      <Link to={"/signout"}>
        <li>
          <i class="fa-solid fa-right-from-bracket"></i>Logout
        </li>
      </Link>
    </ul>
  );
};

export default Sidebar;
