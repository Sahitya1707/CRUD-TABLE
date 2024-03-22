"use client";
import PageHeading from "@/app/components/PageHeading";
import Shimmer from "@/app/components/Shimmer";
import SubmitButton from "@/app/components/SubmitButton";
import {
  ActionIcon,
  ShortTableHeading,
  TableData,
  TableHeading,
} from "@/app/components/Table";
import { BACKEND_URL } from "@/app/utils/Constant";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const Edit = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BACKEND_URL}get`);
      setData(response.data.data);
    };
    fetchData();
  }, []);
  const [checked, setChecked] = useState([]);

  const handleDelete = (id) => {
    console.log(id);
  };
  const handleEdit = (id) => {
    console.log(id);
  };
  if (data === null) return <Shimmer />;
  return (
    <>
      <PageHeading heading="edit" />
      <div className="flex w-[17rem] items-center my-4 ">
        <p className="uppercase mx-2">Search:</p>
        <input
          type="text"
          className="border-2 border-black rounded-md px-2 py-1 shadow-inner"
          placeholder="Search By Name"
        />
      </div>
      <div className="flex justify-center">
        <table className="m-2 ">
          <thead>
            <tr className="">
              <ShortTableHeading tableHeading="-" />
              <ShortTableHeading tableHeading="S.N" />
              <TableHeading tableHeading="First Name" />
              <TableHeading tableHeading="Last Name" />
              <TableHeading tableHeading="Image" />
              <TableHeading tableHeading="Email" />
              <TableHeading tableHeading="Phone Number" />
              <TableHeading tableHeading="Action" />
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

                return (
                  <tr
                    key={_id}
                    className="hover:bg-[#8080804b] hover:cursor-pointer hover:duration-75 hover:ease-in"
                  >
                    <td className="border-solid border-2 border-black">
                      <input
                        type="checkbox"
                        value={_id}
                        className="mx-auto w-full "
                      />
                    </td>

                    <TableData tableData={i + 1} />
                    <TableData tableData={firstName} />
                    <TableData tableData={lastName} />
                    <TableData
                      tableImg={`${BACKEND_URL}images/${avatarImg}`}
                      imgDesc="image"
                    />
                    <TableData tableData={emailId} />
                    <TableData tableData={contact} />
                    <td className="border-2 border-black border-solid ">
                      <span className="flex items-center justify-center gap-x-4">
                        <ActionIcon
                          color="red"
                          icon={<MdDelete />}
                          // dataId={_id}
                          handleClick={(e) => {
                            handleDelete(_id);
                          }}
                        />
                        <ActionIcon
                          color="blue"
                          icon={<CiEdit />}
                          handleClick={(e) => {
                            handleEdit(_id);
                          }}
                        />
                      </span>
                    </td>
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
