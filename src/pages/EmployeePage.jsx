import React from "react";
import Sidebar from "../components/Sidebar";
import EmployeeDashboard from "../components/EmployeeDashboard";
import { Route, Routes } from "react-router-dom";

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
