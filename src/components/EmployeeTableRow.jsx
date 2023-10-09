import React, { useState } from "react";
// import { IoMdBusiness, IoIosHome } from "react-icons/io";
const EmployeeTableRow = () => {
  const [attendance, setAttendance] = useState(false);
  const [onSite, setOnSite] = useState(false);
  const [doneSyncUp, setDoneSyncUp] = useState(false);

  const handleTogglePresent = () => {
    setAttendance(!attendance);
  };
  const handleToggleOnSite = () => {
    setOnSite(!onSite);
  };
  return (
    <tr>
      <td className="py-2 px-4 border-b">1</td>
      <td className="py-2 px-4 border-b">John Doe</td>
      <td className="py-2 px-4 border-b">johndoe@gmail.com</td>
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
      {/* <td className="py-2 px-4 border-b">
        {attendance ? (
          <button
            className={`bg-green-500 text-white font-bold py-2 px-4 rounded`}
            onClick={handleToggleOnSite}
          >
            <IoMdBusiness />
          </button>
        ) : (
          <button
            className={`bg-red-500 text-white font-bold py-2 px-4 rounded`}
            onClick={handleToggleOnSite}
          >
            <IoIosHome />
          </button>
        )}
      </td> */}
    </tr>
  );
};

export default EmployeeTableRow;
