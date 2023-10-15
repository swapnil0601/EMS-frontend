import React, { useState } from "react";
// import { IoMdBusiness, IoIosHome } from "react-icons/io";
const EmployeeTableRow = ({ employee }) => {
  const [attendance, setAttendance] = useState(false);
  // const [onSite, setOnSite] = useState(false);
  // const [doneSyncUp, setDoneSyncUp] = useState(false);

  const handleTogglePresent = () => {
    setAttendance(!attendance);
  };
  // const handleToggleOnSite = () => {
  //   setOnSite(!onSite);
  // };

  const { employeeId, firstName, lastName, email } = employee;
  return (
    <tr>
      <td className="py-2 px-4 border-b">{employeeId}</td>
      <td className="py-2 px-4 border-b">
        {firstName} {lastName}
      </td>
      <td className="py-2 px-4 border-b">{email}</td>
      <td className="py-2 px-4 border-b">
        {attendance ? (
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
    </tr>
  );
};

export default EmployeeTableRow;
