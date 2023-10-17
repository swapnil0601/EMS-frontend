import axios from "axios";
import React, { useEffect, useState } from "react";

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/employee/all")
      .then((res) => {
        setEmployeeList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex justify-center items-center w-1/2">
      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 font-semibold border-b">Id</th>
            <th className="py-2 px-4 font-semibold border-b">Name</th>
            <th className="py-2 px-4 font-semibold border-b">Email</th>
            <th className="py-2 px-4 font-semibold border-b">Role</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee) => (
            <tr key={employee.employeeId}>
              <td className="py-2 px-4 border-b border-gray-200">
                {employee.employeeId}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {employee.firstName} {employee.lastName}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {employee.email}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {employee.role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
