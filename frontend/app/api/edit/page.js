"use client";
import PageHeading from "@/app/components/PageHeading";
import Shimmer from "@/app/components/Shimmer";
import SubmitButton from "@/app/components/SubmitButton";
import {
  ShortTableHeading,
  TableData,
  TableHeading,
} from "@/app/components/Table";
import { BACKEND_URL } from "@/app/utils/Constant";
import axios from "axios";
import { useEffect, useState } from "react";

const Edit = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BACKEND_URL}get`);
      setData(response.data.data);
    };
    fetchData();
  }, []);
  console.log(data);
  if (data === null) return <Shimmer />;
  return (
    <>
      <PageHeading heading="edit" />
      <div className="flex w-[17rem] items-center my-4">
        <p className="uppercase mx-2">Search:</p>
        <input
          type="text"
          className="border-2 border-black rounded-md px-2 py-1 shadow-inner"
          placeholder="Search By Name"
        />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <ShortTableHeading tableHeading="-" />
              <ShortTableHeading tableHeading="S.N" />
              <TableHeading tableHeading="First Name" />
              <TableHeading tableHeading="Last Name" />
              <TableHeading tableHeading="Image" />
              <TableHeading tableHeading="Email" />
              <TableHeading tableHeading="Phone Number" />
              <TableHeading tableHeading="Edit" />
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((e, i) => {
                const {
                  _id,
                  firstName,
                  lastName,
                  avatarImg,
                  emailId,
                  contact,
                } = e;
                console.log(e);
                return (
                  <tr key={_id}>
                    <td className="border-solid border-2 border-black">
                      <input
                        type="checkbox"
                        value={_id}
                        className="mx-auto w-full "
                      />
                    </td>
                    <td className="border-solid border-2 border-black">{i}</td>
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
    </>
  );
};

export default Edit;
