import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const RecordForm = () => {
  const [employeeId, setEmployeeId] = useState();
  const [present, setPresent] = useState(true);
  const [onSite, setOnSite] = useState(true);
  const [doneSyncUpCall, setDoneSyncUpCall] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const { state } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      employeeId: Number(employeeId),
      present,
      onSite,
      doneSyncUpCall,
      date,
      token: state.token,
    };
    console.log(data);
    axios
      .post("http://localhost:8080/api/v1/record/addrecord", data)
      .then((res) => {
        console.log(res);
        alert("Record Assigned Successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Record Assignment Failed");
      });
  };
  return (
    <div className="flex justify-center items-center w-1/2 border-2">
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
            htmlFor="present"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Present
          </label>
          <select
            id="present"
            className="w-full border rounded py-2 px-3"
            placeholder="Select Attendance"
            value={present}
            onChange={(e) => setPresent(e.target.value)}
          >
            <option value={true}>Present</option>
            <option value={false}>Absent</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="On Site"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Location
          </label>
          <select
            id="On Site"
            className="w-full border rounded py-2 px-3"
            placeholder="-Select Location-"
            value={onSite}
            onChange={(e) => setOnSite(e.target.value)}
          >
            <option value={true}>On Site</option>
            <option value={false}>Work From Home</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="doneSyncUpCall"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Done Sync Up Call?
          </label>
          <select
            id="doneSyncUpCall"
            className="w-full border rounded py-2 px-3"
            placeholder="-Sync Up Status-"
            value={doneSyncUpCall}
            onChange={(e) => setDoneSyncUpCall(e.target.value)}
          >
            <option value={true}>Done</option>
            <option value={false}>Not Done</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full border rounded py-2 px-3"
            placeholder="Enter Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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

export default RecordForm;
