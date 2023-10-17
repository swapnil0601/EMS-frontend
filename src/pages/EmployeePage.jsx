import React from "react";
import Sidebar from "../components/Sidebar";
import EmployeeDashboard from "../components/EmployeeDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const EmployeePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Routes>
        <Route path="dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </div>
  );
};

export default EmployeePage;
