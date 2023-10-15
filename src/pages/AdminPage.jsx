import React from "react";
import AdminDashboard from "../components/AdminDashboard";
import Sidebar from "../components/Sidebar";
const AdminPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <AdminDashboard />
    </div>
  );
};

export default AdminPage;
