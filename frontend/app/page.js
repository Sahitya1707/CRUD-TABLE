"use client";
import { useEffect, useState } from "react";
import { TableData, TableHeading } from "./components/Table";
import { BACKEND_URL } from "./utils/Constant";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BACKEND_URL}get`);
      console.log(response.data);
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <section className="">
      {/* Need to add filter and all those features will be over here */}
      <div>
        <table className="border-2 border-solid border-black mx-auto">
          <thead>
            <tr className="border-2 border-solid border-black ">
              <TableHeading tableHeading="First Name" />
              <TableHeading tableHeading="Last Name" />
              <TableHeading tableHeading="Image" />
              <TableHeading tableHeading="Email" />
              <TableHeading tableHeading="Phone Number" />
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.data?.data.map((e) => {
                console.log(e);
                const {
                  _id,
                  firstName,
                  lastName,
                  avatarImg,
                  emailId,
                  contact,
                } = e;
                return (
                  <tr key={_id}>
                    <TableData tableData={firstName} />
                    <TableData tableData={lastName} />
                    <TableData
                      tableImg={`${BACKEND_URL}images/${avatarImg}`}
                      imgDesc="image"
                    />
                    <TableData tableData={emailId} />
                    <TableData tableData={contact} />
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
