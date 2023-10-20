import React, { useEffect, useState } from "react";
import CreateDepartment from "./CreateDepartment";
import DepartmentList from "./DepartmentList";
import axios from "axios";

const Department = () => {
  const [departmentList, setDepartmentList] = useState([]);

  const fetchDepartments = () => {
    axios
      .get("http://localhost:8080/api/v1/department/all")
      .then((res) => {
        setDepartmentList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleDepartmentCreate = () => {
    fetchDepartments();
  };

  return (
    <div className="flex gap-2">
      <CreateDepartment onDepartmentCreate={handleDepartmentCreate} />
      <DepartmentList departmentList={departmentList} />
    </div>
  );
};

export default Department;
