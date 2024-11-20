import { ChartNoAxesColumn, SquareLibrary } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block fixed top-0 left-0 w-[250px] sm:w-[300px] h-screen border-r border-gray-300 dark:border-gray-700 p-5 mt-20">
        <div className="space-y-4 mt-8">
          <Link to="dashboard" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
            <ChartNoAxesColumn size={22} />
            <h1>Dashboard</h1>
          </Link>
          <Link to="courses" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
            <SquareLibrary size={22} />
            <h1>Courses</h1>
          </Link>
        </div>
      </div>
      <div className="flex-1 ml-[250px] lg:ml-[300px] p-10">
        <Outlet/>
      </div>
    </div>
  );
};

export default Sidebar;