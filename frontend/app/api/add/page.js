"use client";

import React, { useState } from "react";
import PageHeading from "@/app/components/PageHeading";
import { InputField, InputFile } from "@/app/components/InputField";
import SubmitButton from "@/app/components/SubmitButton";
import { BACKEND_URL } from "@/app/utils/Constant";

const Add = () => {
  const [inputFormData, setInputFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",

    img: "",
  });

  const handleInput = (e) => {
    // console.log(e.target.value);

    setInputFormData({
      ...inputFormData,
      [`${e.target.name}`]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputFormData);

    await fetch(`${BACKEND_URL}add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(inputFormData),
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <section>
      <PageHeading heading="Add your data" />
      <form className="bg-[#30b08e] w-[70%] h-[20rem] mx-auto mt-4 rounded-xl py-2 ">
        {/* <div className="flex items-center justify-center flex-col"> */}
        {/* <p>First Name:</p> */}
        <div className="grid gap-x-5 grid-cols-2 justify-center items-end mx-auto w-[80%]">
          <InputField
            type="text"
            inputName="First name"
            name="firstName"
            value={inputFormData.firstName}
            placeholder={"Enter your first name"}
            handleInput={handleInput}

            // required={false}
          />
          <InputField
            type="text"
            inputName="Last name"
            name="lastName"
            value={inputFormData.lastName}
            placeholder={"Enter your last name"}
            handleInput={handleInput}

            // required={false}
          />
          <InputField
            type="text"
            inputName=" Email Id"
            name="email"
            value={inputFormData.email}
            placeholder={"Enter your mail id"}
            handleInput={handleInput}

            // required={false}
          />
          <InputField
            type="text"
            inputName=" Phone Number"
            name="contactNumber"
            value={inputFormData.contactNumber}
            placeholder={"Enter your phone number"}
            handleInput={handleInput}

            // required={false}
          />
          <InputFile
            accept="image/*"
            inputName="Choose Your image"
            handleInput={handleInput}
            name="img"
          />
        </div>

        <SubmitButton name="Submit" handleSubmit={handleSubmit} />
        {/* </div> */}
      </form>
    </section>
  );
};

export default Add;
