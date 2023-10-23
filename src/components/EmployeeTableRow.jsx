import React, { useState } from "react";
import { UploadIcon } from "@radix-ui/react-icons";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-hot-toast";
const EmployeeTableRow = ({ employee, date }) => {
  const [present, setPresent] = useState(false);
  const [onSite, setOnSite] = useState(false);
  const [doneSyncUp, setDoneSyncUp] = useState(false);
  const { state } = useAuth();
  const handleTogglePresent = () => {
    setPresent(!present);
  };
  const handleToggleOnSite = () => {
    setOnSite(!onSite);
  };
  const handleToggleDoneSyncUp = () => {
    setDoneSyncUp(!doneSyncUp);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const data = {
      employeeId: Number(employee.employeeId),
      present,
      onSite,
      doneSyncUpCall: doneSyncUp,
      date,
      token: state.token,
    };
    console.log(data);
    axios
      .post("http://localhost:8080/api/v1/record/addrecord", data)
      .then((res) => {
        toast.success("Record Assignment Successful");
        console.log("Success: " + res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Record Assignment Failed");
      });
  };

  const { employeeId, firstName, lastName, email } = employee;
  return (
    <tr>
      <td className="py-2 px-4 border-b">{employeeId}</td>
      <td className="py-2 px-4 border-b">
        {firstName} {lastName}
      </td>
      <td className="py-2 px-4 border-b">{email}</td>
      <td className="py-2 px-4 border-b">
        {present ? (
          <button
            className={`bg-green-500 text-white font-bold py-2 px-4 rounded`}
            onClick={handleTogglePresent}
          >
            Present
          </button>
        ) : (
          <button
            className={`bg-red-500 text-white font-bold py-2 px-4 rounded`}
            onClick={handleTogglePresent}
          >
            Absent
          </button>
        )}
      </td>
      <td className="py-2 px-4 border-b">
        {onSite ? (
          <button
            className={`bg-green-500 text-white font-bold py-2 px-4 rounded`}
            onClick={handleToggleOnSite}
          >
            Office
          </button>
        ) : (
          <button
            className={`bg-orange-500 text-white font-bold py-2 px-4 rounded`}
            onClick={handleToggleOnSite}
          >
            Home
          </button>
        )}
      </td>
      <td className="py-2 px-4 border-b">
        {doneSyncUp ? (
          <button
            className={`bg-green-500 text-white font-bold py-2 px-4 rounded`}
            onClick={handleToggleDoneSyncUp}
          >
            Done
          </button>
        ) : (
          <button
            className={`bg-red-500 text-white font-bold py-2 px-4 rounded`}
            onClick={handleToggleDoneSyncUp}
          >
            Not Done
          </button>
        )}
      </td>
      <td className="py-2 px-4 border-b">
        <button
          className={`bg-green-500 text-white font-bold py-2 px-4 rounded`}
          onClick={handleUpload}
        >
          <UploadIcon />
        </button>
      </td>
    </tr>
  );
};

export default EmployeeTableRow;
