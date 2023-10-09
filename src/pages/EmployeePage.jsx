import React from "react";
import Sidebar from "../components/Sidebar";
import EmployeeDashboard from "../components/EmployeeDashboard";

const EmployeePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <EmployeeDashboard />
    </div>
  );
};

export default EmployeePage;
