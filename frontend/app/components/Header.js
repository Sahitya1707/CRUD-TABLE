"use client";
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex fixed">
      <Sidebar />
      <Navbar />
    </header>
  );
};

export default Header;
