import React from "react";
import Link from "next/link";

const SidebarButton = (props) => {
  return (
    <Link href={`${props.link}`}>
      <li className="flex justify-start items-center border-[#ffffff51] border-solid border-2 gap-x-3 cursor-pointer rounded py-1 my-2 bg-[#151615]  mx-auto uppercase hover:bg-[#000000] hover:duration-75 hover:ease-out pl-2 w-[90%]">
        <span>{props.icon}</span>
        <p className="tracking-wider">{props.name}</p>
      </li>
    </Link>
  );
};

export default SidebarButton;
