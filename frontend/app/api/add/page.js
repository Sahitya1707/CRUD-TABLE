"use client";

import React, { useState } from "react";
import axios from "axios";
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
    const formData = new FormData();
    e.preventDefault();
    // console.log(inputFormData.img);

    formData.append("firstName", inputFormData.firstName);
    formData.append("lastName", inputFormData.lastName);
    formData.append("email", inputFormData.email);
    formData.append("contactNumber", inputFormData.contactNumber);
    formData.append("img", inputFormData.img);
    await axios.post(`${BACKEND_URL}add`, formData).then((res) => {
      console.log(res);
    });
    // await fetch(`${BACKEND_URL}add`, {
    //   method: "POST",
    //   body: formData,
    // }).then((res) => {
    //   console.log(res);
    // });
    console.log([...formData.entries()]);
  };

  return (
    <section>
      <PageHeading heading="Add your data" />
      <form
        className="bg-[#30b08e] w-[70%] h-[20rem] mx-auto mt-4 rounded-xl py-2 "
        encType="multipart/form-data"
      >
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
            handleInput={(e) => {
              setInputFormData({
                ...inputFormData,
                [`${e.target.name}`]: e.target.files[0],
              });
            }}
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
