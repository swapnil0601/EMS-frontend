import React from "react";
import EmployeeList from "../Employee/EmployeeList";
import DepartmentList from "../Department/DepartmentList";
import AssignForm from "./AssignForm";

const Assign = () => {
  return (
    <div className="flex flex-col gap-2">
      <AssignForm />
      <div className="flex">
        <EmployeeList />
        <DepartmentList />
      </div>
    </div>
  );
};

export default Assign;
