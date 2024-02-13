import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="sidebar_menu">
      <li>
        <Link to={"/"}>
          <i class="fa-solid fa-table-columns"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to={"/UserList"}>
          <i class="fa-solid fa-user"></i>
          <span>User_list</span>
        </Link>
      </li>
      <li>
        <Link to={"/Statistics"}>
          <i class="fa-solid fa-chart-line"></i>
          <span>Statistics</span>
        </Link>
      </li>
      <li>
        <Link to={"/Enquiry"}>
          <i class="fa-solid fa-handshake-angle"></i>
          <span>Enquiry</span>
        </Link>
      </li>
      <li>
        <Link to={"/Feeding"}>
          <i class="fa-solid fa-file-export"></i>
          <span>Feeding</span>
        </Link>
      </li>
      <li>
        <Link to={"/Products"}>
          <i class="fa-solid fa-box-open"></i>
          <span>Products</span>
        </Link>
      </li>
      <li>
        <Link to={"/signout"}>
          <i class="fa-solid fa-right-from-bracket"></i>
          <span>Logout</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
