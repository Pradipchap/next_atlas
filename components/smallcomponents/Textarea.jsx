import React from "react";

export default function Textarea({ onchange, value, label = false }) {
  return (
    <div className="flex flex-col my-3">
      {!label == false && <label htmlFor="">{label}</label>}
      <textarea
        type="text"
        className=" w-96 border bg-white outline-none px-5 py-2 mx-2 my-2 rounded-md"
        value={value}
        onChange={(e) => onchange(e.target.value)}
        rows={10}
        required
      />
    </div>
  );
}
