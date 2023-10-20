import React, { useState } from "react";
import StatisticCard from "./StatisticCard";
import EmployeeTable from "./EmployeeTable";

const AdminDashboard = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  return (
    <div className="flex-1 p-8">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="flex mb-8">
        <div className="mr-4">
          <StatisticCard title="Total Users" value="1000" />
        </div>
        <div>
          <StatisticCard title="Total Orders" value="500" />
        </div>
      </div>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <EmployeeTable date={date} />
    </div>
  );
};

export default AdminDashboard;
