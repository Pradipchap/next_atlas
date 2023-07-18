import React from "react";

export default function Button({ name, operation, variant = "create" }) {


  const btnfunction = () => {
    //performs function passed down as props
    operation();
  };

  return (
    <button
      type="button"
      onClick={btnfunction}
      className={`py-2 px-4 mx-1 my-1 rounded-md text-white ${
        variant === "create" ? "bg-blue-700 " : "bg-red-700"
      }`}
    >
      {name}
    </button>
  );
}
