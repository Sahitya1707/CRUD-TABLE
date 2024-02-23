import React from "react";

const SubmitButton = (props) => {
  return (
    <button
      className="hover:bg-[white] mx-auto flex items-center px-5 py-2 cursor-pointer rounded-md uppercase text-[0.7rem] hover:text-[#141630] font-semibold hover:border-[#141630] border-2 border-solid bg-[#141630] border-[white] text-[white] hover:duration-75 hover:ease-in my-2"
      onClick={props.handleSubmit}
    >
      {props.name}
    </button>
  );
};

export default SubmitButton;
