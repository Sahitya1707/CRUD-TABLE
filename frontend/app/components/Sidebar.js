import React from "react";
import { IoHome } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <section className="w-[13rem] px-2 py-2 bg-[#141630] h-[100vh] fixed">
      <img src="/logo.png" alt="" className="w-[4rem] h-[4rem] mx-auto" />
      <div>
        <ul className="text-[white]">
          <SidebarButton name=" Dashboard" icon={<IoHome />} link="/" />

          <SidebarButton name=" Add" icon={`+`} link="/api/add" />

          <SidebarButton name=" Setting" icon={<IoMdSettings />} />
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
