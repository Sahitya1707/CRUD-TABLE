import React from "react";
import Link from "next/link";
const NavbarButton = (props) => {
  return (
    <Link href={`${props.link}`}>
      <li className="">{props.name}</li>
    </Link>
  );
};

export default NavbarButton;
