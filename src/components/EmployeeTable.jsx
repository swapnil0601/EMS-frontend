import React from "react";
import EmployeeTableRow from "./EmployeeTableRow";

const EmployeeTable = () => {
  return (
    <table className="min-w-full bg-white border rounded-lg">
      {/* Table header */}
      <thead>
        <tr>
          <th className="py-2 px-4 font-semibold border-b">ID</th>
          <th className="py-2 px-4 font-semibold border-b">Name</th>
          <th className="py-2 px-4 font-semibold border-b">Email</th>
          <th className="py-2 px-4 font-semibold border-b">Attendance</th>
          <th className="py-2 px-4 font-semibold border-b">On-Site</th>
          <th className="py-2 px-4 font-semibold border-b">Sync Up Call</th>
          <th className="py-2 px-4 font-semibold border-b">Update</th>
        </tr>
      </thead>
      <tbody>
        <EmployeeTableRow />
        <EmployeeTableRow />
        <EmployeeTableRow />
        <EmployeeTableRow />
      </tbody>
    </table>
  );
};

export default EmployeeTable;
