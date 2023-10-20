import React from "react";

const AssignmentList = ({ assignmentList }) => {
  console.log(assignmentList);
  return (
    <div className="flex justify-center items-center w-1/2">
      <table className="min-w-[300px] bg-white border rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 font-semibold border-b">Emp. Id</th>
            <th className="py-2 px-4 font-semibold border-b">Name</th>
            <th className="py-2 px-4 font-semibold border-b">Dep. Id</th>
            <th className="py-2 px-4 font-semibold border-b">Department</th>
            <th className="py-2 px-4 font-semibold border-b">
              Assignment Date
            </th>
          </tr>
        </thead>
        <tbody>
          {assignmentList?.map((assignment) => (
            <tr key={assignment.assignmentId}>
              <td className="py-2 px-4 border-b border-gray-200">
                {assignment.employeeId}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {assignment.fullName}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {assignment.departmentId}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {assignment.departmentName}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {assignment.assignmentDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentList;
