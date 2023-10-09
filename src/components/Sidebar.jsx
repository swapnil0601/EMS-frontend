import { ExitIcon } from "@radix-ui/react-icons";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-1/5 flex flex-col justify-between py-4">
      <div>
        <ul className="text-white">
          <li className="py-2 pl-4 cursor-pointer mb-6 font-semibold">
            Swapnil Sahoo
          </li>
          <li className="flex items-center justify-center py-2 px-4 w-full gap-3 hover:bg-gray-700 cursor-pointer">
            Users
          </li>
          <li className="flex items-center justify-center py-2 px-4 w-full gap-3 hover:bg-gray-700 cursor-pointer">
            Settings
          </li>
        </ul>
      </div>
      <div>
        <button
          //   onClick={onLogout}
          className="text-white font-bold flex items-center justify-center py-2 px-4 w-full gap-3 hover:bg-gray-700"
        >
          <ExitIcon /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
