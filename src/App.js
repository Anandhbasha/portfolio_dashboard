import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Containers/Navbar/Navbar";
import Sidebar from "./Containers/Sidebar/Sidebar";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="dashboard_Topbar">
        <Navbar />
      </div>
      <div className="dashboard_content_section">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="routing_pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
