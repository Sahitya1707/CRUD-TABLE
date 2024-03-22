import Image from "next/image";
import { MdDelete } from "react-icons/md";
export const TableHeading = (props) => {
  return (
    <th className="border-2 border-solid border-black  uppercase w-[12rem] tracking-wider text-center">
      {props.tableHeading}
    </th>
  );
};
export const ShortTableHeading = (props) => {
  return (
    <th className="border-2 border-solid border-black  uppercase w-[4rem] tracking-wider text-center">
      {props.tableHeading}
    </th>
  );
};
export const TableData = (props) => {
  const { tableData, tableImg, imgDesc } = props;

  return (
    <>
      {tableData ? (
        <td className="border-2 border-solid border-black text-center">
          {" "}
          {tableData}
        </td>
      ) : (
        <td className=" border-2 border-solid border-black px-2">
          {" "}
          <img
            src={tableImg}
            alt=""
            className="w-[3.5rem] h-[3.5rem] rounded-full border-[0.5px] border-solid border-black p-[0.5px] mx-auto my-4"
          />
          {/* quite confusing using tailwind css with next js */}
          {/* <Image
            src={tableImg}
            // width={500}
            // height={500}
            alt={imgDesc}
            layout="fill" // required
            objectFit="cover" // change as you like
            className="rounded-full h-2" // you can use other classes here too
          /> */}
        </td>

        // <Image
        //   src={tableImg}
        //   width={500}
        //   height={500}
        //   className="px-2 border-2 border-solid"
        // />
        // <></>
      )}
    </>
  );
};
export const ActionIcon = (props) => {
  const { color, icon, handleClick, idValue } = props;
  console.log(props);
  return (
    <span
      className={`text-2xl text-[${color}]`}
      onClick={(idValue) => {
        handleClick(idValue);
      }}
      // dataId={idValue}
    >
      {/* <Icon /> */}
      {icon}
    </span>
  );
};
