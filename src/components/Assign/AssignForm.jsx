import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const AssignForm = () => {
  const [employeeId, setEmployeeId] = useState();
  const [departmentId, setDepartmentId] = useState();
  const { state } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(employeeId, departmentId, state.token);
    const formData = {
      employeeId: Number(employeeId),
      departmentId: Number(departmentId),
      token: state.token,
    };
    console.log(formData);

    axios
      .post("http://localhost:8080/api/v1/assign/assignEmployee", formData)
      .then((res) => {
        alert("Employee Assigned Successfully");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center w-1/2 border-2 h-80 min-w-[400px]">
      <form className="p-2 bg-white w-2/3" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">
          Assign <span className="font-bold">Employee</span>
        </h2>
        <div className="mb-4">
          <label
            htmlFor="employeeId"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Employee Id
          </label>
          <input
            type="number"
            id="employeeId"
            className="w-full border rounded py-2 px-3"
            placeholder="Enter Employee Id"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="departmentId"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Department Id
          </label>
          <input
            type="number"
            id="departmentId"
            className="w-full border rounded py-2 px-3"
            placeholder="Enter Department Id"
            value={departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
        >
          Assign
        </button>
      </form>
    </div>
  );
};

export default AssignForm;
