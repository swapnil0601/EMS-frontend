import React, { useEffect, useState } from "react";
import EmployeeTableRow from "./EmployeeTableRow";
import axios from "axios";
const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/v1/employee/all"
    );
    setEmployees(response.data.data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <table className="min-w-full bg-white border rounded-lg">
      {/* Table header */}
      <thead>
        <tr>
          <th className="py-2 px-4 font-semibold border-b">ID</th>
          <th className="py-2 px-4 font-semibold border-b">Name</th>
          <th className="py-2 px-4 font-semibold border-b">Email</th>
          <th className="py-2 px-4 font-semibold border-b">Update</th>
        </tr>
      </thead>
      <tbody>
        {employees &&
          employees.map((employee) => (
            <EmployeeTableRow key={employee.employeeId} employee={employee} />
          ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
