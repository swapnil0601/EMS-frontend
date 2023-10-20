import React, { useEffect, useState } from "react";
import AssignForm from "./AssignForm";
import axios from "axios";
import AssignmentList from "./AssignmentList";
import UnassingedList from "./UnassignedList";

const Assign = () => {
  const [assignmentList, setAssignmentList] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);
  const fetchAssignments = () => {
    axios
      .get("http://localhost:8080/api/v1/assign/getAssignmentInfo")
      .then((res) => {
        setAssignmentList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchUnassignedEmployees = () => {
    axios
      .get("http://localhost:8080/api/v1/assign/getUnassignedEmployees")
      .then((res) => {
        setEmployeeList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAssignCreate = () => {
    fetchAssignments();
    fetchUnassignedEmployees();
  };

  useEffect(() => {
    fetchAssignments();
    fetchUnassignedEmployees();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <AssignForm onAssignCreate={handleAssignCreate} />
      <div className="flex">
        <AssignmentList assignmentList={assignmentList} />
        <UnassingedList employeeList={employeeList} />
      </div>
    </div>
  );
};

export default Assign;
