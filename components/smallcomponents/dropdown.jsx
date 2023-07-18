"use client";
import React, { useState } from "react";

export default function Dropdown({value,operation}) {
  // const [value, setValue] = useState("")
  const handleChange = (e) => {
operation(e.target.value)
  };

  return (
    <select
      className="w-full h-10 outline-none bg-transparent"
      value={value}
      onChange={handleChange}
    >
      <option value="Science">Science</option>
      <option value="History">History</option>
      <option value="Art">Art</option>
    </select>
  );
}
