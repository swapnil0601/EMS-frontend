import React from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import { useState, useEffect } from "react";

const DataExport = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/record/last30daysreport")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const exportToExcel = () => {
    const modifiedData = data.map((item) => {
      return {
        Name: item.name,
        Present: item.present,
        Onsite: item.onsite,
        "Done Syncup Call": item.donesyncupcall,
      };
    });

    const ws = XLSX.utils.json_to_sheet(modifiedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.xlsx");
  };

  return (
    <div>
      <button
        className="p-2 bg-slate-600 text-white hover:bg-slate-800 mb-4"
        onClick={exportToExcel}
      >
        Export to Excel
      </button>
      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 font-semibold border-b">Name</th>
            <th className="py-2 px-4 font-semibold border-b">Present</th>
            <th className="py-2 px-4 font-semibold border-b">Onsite</th>
            <th className="py-2 px-4 font-semibold border-b">
              Done Syncup Call
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.present}</td>
              <td className="py-2 px-4 border-b">{item.onsite}</td>
              <td className="py-2 px-4 border-b">{item.donesyncupcall}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataExport;
