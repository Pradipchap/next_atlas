"use client";
import React from "react";
import { useState } from "react";

export default function alert({ message, status }) {
  const [openStatus, setOpenStatus] = useState(false);
  const [Message, setMessage] = useState(second)
  const handleAlert = () => {
    setOpenStatus(true);
  };
  setTimeout(() => {
    if (openStatus === true) setOpenStatus(false);
  }, 5000);

  return (
    <div className="mx-2 my-2 px-3 py-2 absolute bottom-4  text-white">
      {message}
    </div>
  );
}
