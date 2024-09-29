import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { adminPaths } from "../../routes/admin.routes";
import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";

const DashboardLayout = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const sidebarItems = sidebarItemGenerator(adminPaths, "admin");
  console.log(sidebarItems);
  return (
    <div className="grid grid-cols-12">
      <Sidebar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
        items={sidebarItems}
      />

      <main
        className={`${
          isOpenSidebar ? "ml-12 col-span-full" : "ml-72 col-span-full"
        }  bg-accent/10 transition-all duration-300 h-screen px-5 py-12`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
