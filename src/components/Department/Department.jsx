import React from "react";
import CreateDepartment from "./CreateDepartment";
import DepartmentList from "./DepartmentList";

const Department = () => {
  return (
    <div className="flex gap-2">
      <CreateDepartment />
      <DepartmentList />
    </div>
  );
};

export default Department;
