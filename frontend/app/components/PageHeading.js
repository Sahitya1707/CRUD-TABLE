import React from "react";

const PageHeading = (props) => {
  return (
    <h1 className="text-center uppercase font-bold tracking-widest text-2xl">
      {props.heading}
    </h1>
  );
};

export default PageHeading;
