"use client";
import React, { useState } from "react";

export default function Dropdown({ value, operation, label = false }) {
  // const [value, setValue] = useState("")
  const handleChange = (e) => {
    operation(e.target.value);
  };

  return (
    <div className="flex flex-col gap-5">
      {!label === false && (
        <label htmlFor="genre" className="text">
          {label}
        </label>
      )}

      <select
        id="genre"
        className="w-full h-10 outline-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        value={value}
        onChange={handleChange}
      >
        <option value="Science">Science</option>
        <option value="History">History</option>
        <option value="Art">Art</option>
      </select>
    </div>
  );
}
