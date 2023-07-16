"use client";
import React from "react";
import { useState } from "react";
import Input from "./smallcomponents/Input";
import Button from "./Button";
import Textarea from "./smallcomponents/Textarea";
export default function CreateBlog({
  isFromCreatePage,
  userid,
  sessionid,
  submit,
}) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  return (
    <form className="flex flex-col justify-center items-center mt-[10rem]">
      <Input onchange={setTitle} value={title} label="Title" />
      <Input onchange={setGenre} value={genre} label="Genre" />
      <Textarea
        onchange={setDescription}
        value={description}
        label="Short Description"
      />
      <div id="editorjs" className=" w-[30rem] "></div>

      {isFromCreatePage ? (
        <Button
          name="Submit"
          variant="create"
          operation={() => {
            alert(title+genre+description);
            submit(title, genre, description);
          }}
        />
      ) : (
        userid === sessionid && (
          <Button
            name="Update"
            variant="Update"
            operation={() => submit(title, genre, description)}
          />
        )
      )}
    </form>
  );
}
