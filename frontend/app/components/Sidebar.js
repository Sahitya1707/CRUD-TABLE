import React from "react";
import { IoHome } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <section className="w-[10rem] px-2 py-2 bg-[#141630] h-[100vh] sticky">
      <img src="/logo.png" alt="" className="w-[4rem] h-[4rem] mx-auto" />
      <div>
        <ul className="text-[white]">
          <li className="flex justify-start items-center border-[#ffffff51] border-solid border-2 gap-x-3 cursor-pointer rounded py-1 my-2 bg-[#151615]  mx-auto uppercase hover:bg-[#000000] hover:duration-75 hover:ease-out pl-2">
            <span>
              <IoHome />
            </span>
            <p className="tracking-wider">Home</p>
          </li>
          <li className="flex justify-start items-center border-[#ffffff51] border-solid border-2 gap-x-3 cursor-pointer rounded py-1 my-2 bg-[#151615]  mx-auto uppercase hover:bg-[#000000] hover:duration-75 hover:ease-out pl-2">
            <span>
              <IoMdSettings />
            </span>
            <p className="tracking-wider">Setting</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
