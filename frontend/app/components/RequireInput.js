import { MdErrorOutline } from "react-icons/md";

const RequireInput = () => {
  return (
    <div className=" border-2 border-[red] px-1 py-4 w-[8rem] h-[2rem] flex gap-x-1 items-center text-[red]">
      <span className=" text-lg mx-auto">
        <MdErrorOutline />
      </span>
      <span className="text-[0.6rem] uppercase">Fill all the input box.</span>
    </div>
  );
};

export default RequireInput;
