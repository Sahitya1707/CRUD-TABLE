"use client";

import React, { useState } from "react";
import PageHeading from "@/app/components/PageHeading";
import { InputField, InputFile } from "@/app/components/InputField";
import SubmitButton from "@/app/components/SubmitButton";

const Add = () => {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
    img: "",
  });

  const handleInput = (e) => {
    // console.log(e.target.value);

    setformData({
      ...formData,
      [`${e.target.name}`]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
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
            value={formData.firstName}
            placeholder={"Enter your first name"}
            handleInput={handleInput}

            // required={false}
          />
          <InputField
            type="text"
            inputName="Last name"
            name="lastName"
            value={formData.lastName}
            placeholder={"Enter your last name"}
            handleInput={handleInput}

            // required={false}
          />
          <InputField
            type="text"
            inputName=" Email Id"
            name="email"
            value={formData.email}
            placeholder={"Enter your mail id"}
            handleInput={handleInput}

            // required={false}
          />
          <InputField
            type="text"
            inputName=" Phone Number"
            name="contactNumber"
            value={formData.contactNumber}
            placeholder={"Enter your phone number"}
            handleInput={handleInput}

            // required={false}
          />
          <InputFile accept="image/*" inputName="Enter the image" />
        </div>

        <SubmitButton name="Submit" handleSubmit={handleSubmit} />
        {/* </div> */}
      </form>
    </section>
  );
};

export default Add;
