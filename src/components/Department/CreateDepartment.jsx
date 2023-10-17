import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const CreateDepartment = () => {
  const [departmentName, setDepartmentName] = useState("");
  const { state } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/department/create", {
        departmentName,
        token: state.token,
      })
      .then((res) => {
        alert("Department Created");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center w-1/2 border-2 h-80">
      <form className="p-2 bg-white w-2/3" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">
          Create <span className="font-bold">Department</span>
        </h2>
        <div className="mb-4">
          <label
            htmlFor="departmentName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Department Name
          </label>
          <input
            type="text"
            id="departmentName"
            className="w-full border rounded py-2 px-3"
            placeholder="Enter Department Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateDepartment;
