import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Containers/Navbar/Navbar";
import Sidebar from "./Containers/Sidebar/Sidebar";
import "./App.css";
import UserList from "./Pages/UserList/UserList";
import Statistics from "./Pages/Statistics/Statistics";
import Enquiry from "./Pages/Enquiry/Enquiry";
import Feeding from "./Pages/Feeding/Feeding";
import Products from "./Pages/Products/Products";

const App = () => {
  return (
    <BrowserRouter>
      <div className="overall_container">
        <div className="dashboard_content_section">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="routing_pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/UserList" element={<UserList />} />
              <Route path="/Statistics" element={<Statistics />} />
              <Route path="/Enquiry" element={<Enquiry />} />
              <Route path="/Feeding" element={<Feeding />} />
              <Route path="/Products" element={<Products />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
