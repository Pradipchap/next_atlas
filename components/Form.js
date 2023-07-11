"use client";

import EasyMDE from "easymde";
import React, { useRef, useState } from "react";

export default function Form({ createBlog }) {
  const textareaRef=useRef()
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const sendData = (e) => {
    e.preventDefault();
    // console.log({title,desc})
    createBlog({ title, description });
  };
const easyMDE=EasyMDE({element:document.getElementById('textareaRef')})
  return (
    <form className="flex flex-col gap-2 w-96 m-auto pt-10" onSubmit={sendData}>
      <label htmlFor="">Title</label>
      <input

        value={title}
        onChange={(e) => settitle(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
        required
      />
      <label htmlFor="">Description</label>
          <textarea
      id=""
        rows={5}
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
      <button
        onClick={sendData}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Submit
      </button>
    </form>

    // <textarea  ref={textareaRef} name="text" id="textareaRef" cols="30" rows="10" className="m-auto ml-32 w-24"/>
  );
}
