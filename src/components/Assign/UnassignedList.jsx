import React from "react";

const UnassingedList = ({ employeeList }) => {
  console.log(employeeList);
  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <h2 className="mb-2">Unassigned</h2>
      <table className="min-w-[300px] bg-white border rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 font-semibold border-b">Emp. Id</th>
            <th className="py-2 px-4 font-semibold border-b">Name</th>
          </tr>
        </thead>
        <tbody>
          {employeeList?.map((employee) => (
            <tr key={employee.employeeId}>
              <td className="py-2 px-4 border-b border-gray-200">
                {employee.employeeId}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {employee.fullName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnassingedList;
