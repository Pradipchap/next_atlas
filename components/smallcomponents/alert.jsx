"use client";
import React from "react";
import { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
export default function Alert({ success }) {
  const [openStatus, setOpenStatus] = useState(false);

  return (
    <div
      className={`flex adjust-center mx-2 my-2 px-4 py-3 rounded-lg fixed top-15 left-3 ${
        success ? "bg-green-700" : "bg-red-500"
      }  text-white block `}
    >
      {success ? (
        <IoCheckmarkOutline size={25} />
      ) : (
        <IoCloseCircleOutline size={25} />
      )}
      <p>{success ? "success" : "failed"}</p>
    </div>
  );
}
