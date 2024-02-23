import React from "react";

import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <nav className="h-[4rem] bg-[white] w-[100vw] shadow-xl pl-[12rem] pr-[2rem]">
      <ul className=" w-[100%] flex items-center justify-end h-[100%] gap-x-4 uppercase">
        <NavbarButton name="profile" link="/" />
        <NavbarButton name="about" link="/about" />

        <li>
          <img
            src="/avatar.png"
            alt=""
            className="w-[2rem] h-[2rem] border-solid border-2 border-[#141630] p-1 rounded-full"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
