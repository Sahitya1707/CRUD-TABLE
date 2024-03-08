// "use client";
import { Inter } from "next/font/google";

import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crud Application Table",
  description: "Creating a table app",
};

export default function RootLayout({ children }) {
  // console.log(children);
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <Header />
        <main className="pl-[15rem] pt-[5rem]">{children}</main>
      </body>
    </html>
  );
}
