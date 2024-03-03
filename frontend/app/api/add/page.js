"use client";

import React, { useState } from "react";
import axios from "axios";
import PageHeading from "@/app/components/PageHeading";
import { InputField, InputFile } from "@/app/components/InputField";
import SubmitButton from "@/app/components/SubmitButton";
import { BACKEND_URL } from "@/app/utils/Constant";
import RequireInput from "@/app/components/RequireInput";

const Add = () => {
  const [inputFormData, setInputFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    img: null,
  });
  const [emptyInputField, setEmptyInputField] = useState(false);
  const { firstName, lastName, email, contactNumber, img } = inputFormData;
  const handleInput = (e) => {
    setEmptyInputField(false);
    setInputFormData({
      ...inputFormData,
      [`${e.target.name}`]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(img);
    const formData = new FormData();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      contactNumber === "" ||
      img === null
    ) {
      setEmptyInputField(true);
    } else {
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("contactNumber", contactNumber);
      formData.append("img", img);
      await axios.post(`${BACKEND_URL}add`, formData).then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <section>
      <PageHeading heading="Add your data" />
      <form
        className="bg-[#30b08e] w-[70%] h-[20rem] mx-auto mt-4 rounded-xl py-2 relative"
        encType="multipart/form-data"
      >
        <span className="absolute right-2 top-2">
          {emptyInputField ? <RequireInput /> : null}
        </span>
        <div className="grid gap-x-5 grid-cols-2 justify-center items-end mx-auto w-[80%]">
          <InputField
            type="text"
            inputName="First name"
            name="firstName"
            value={firstName}
            placeholder={"Enter your first name"}
            handleInput={handleInput}

            // required={false}
          />
          <InputField
            type="text"
            inputName="Last name"
            name="lastName"
            value={lastName}
            placeholder={"Enter your last name"}
            handleInput={handleInput}

            // required={false}
          />
          <InputField
            type="text"
            inputName=" Email Id"
            name="email"
            value={email}
            placeholder={"Enter your mail id"}
            handleInput={handleInput}

            // required={false}
          />
          <InputField
            type="text"
            inputName=" Phone Number"
            name="contactNumber"
            value={contactNumber}
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
