import React from "react";

const InputHeading = (props) => {
  return (
    <p className="uppercase  tracking-wide font-medium text-sm text-[#000000b6]">
      {props.inputName}
    </p>
  );
};

export const InputField = (props) => {
  //   console.log(props);
  const { inputName, value, type, name, placeholder, handleInput, required } =
    props;
  //   console.log(props);
  return (
    <div className="my-2">
      <InputHeading inputName={inputName} />

      <input
        value={value}
        type={type}
        name={name}
        className="border-[black] border-solid border-b-2 px-2 py-2  
        outline-none bg-transparent text-[black] focus:border-[#141630] placeholder-[#d0d0d089]"
        placeholder={`${placeholder}`}
        onChange={handleInput}
        // required={required ? "true" : "false"}
        // onChange={props.handleInput}
      />
    </div>
  );
};
export const InputFile = (props) => {
  return (
    <div>
      <InputHeading inputName={props.inputName} />
      <input type="file" accept={props.accept} />
    </div>
  );
};

// export default InputField;
