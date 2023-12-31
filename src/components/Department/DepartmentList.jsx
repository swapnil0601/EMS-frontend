import React from "react";

const DepartmentList = ({ departmentList }) => {
  return (
    <div className="flex justify-center items-center w-1/2">
      <table className="min-w-[300px] bg-white border rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 font-semibold border-b">Id</th>
            <th className="py-2 px-4 font-semibold border-b">
              Department Name
            </th>
          </tr>
        </thead>
        <tbody>
          {departmentList?.map((department) => (
            <tr key={department.departmentId}>
              <td className="py-2 px-4 border-b border-gray-200">
                {department.departmentId}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {department.departmentName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
