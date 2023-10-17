import React from "react";
import AdminDashboard from "../components/AdminDashboard";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Department from "../components/Department/Department";
import Employee from "../components/Employee/Employee";
import Assign from "../components/Assign/Assign";
import Record from "../components/Record/Record";
const AdminPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 flex-wrap overflow-x-hidden overflow-y-auto p-3">
        <Routes>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="department" element={<Department />} />
          <Route path="employee" element={<Employee />} />
          <Route path="assign" element={<Assign />} />
          <Route path="record" element={<Record />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;
