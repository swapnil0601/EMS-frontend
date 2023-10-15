import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarOption = ({ title, path }) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(path)}
      className="flex items-center justify-center py-2 px-4 w-full gap-3 hover:bg-gray-700 cursor-pointer"
    >
      {title}
    </li>
  );
};

export default SidebarOption;
