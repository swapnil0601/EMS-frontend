import React, { useEffect, useState } from "react";
import AttendanceHeatmap from "../AttendanceHeatmap";
import axios from "axios";
import DataExport from "./ExportableReport";

const Report = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  const getAttendanceData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/record/last30days"
      );
      setAttendanceData(response.data.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAttendanceData();
  }, []);

  return (
    <div>
      <h1>Employee Attendance Heatmap</h1>
      <AttendanceHeatmap attendanceData={attendanceData} />
      <DataExport />
    </div>
  );
};

export default Report;
