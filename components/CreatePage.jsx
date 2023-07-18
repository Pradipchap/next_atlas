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
  titleGenreDescription,
}) {
  const [title, setTitle] = useState(
    titleGenreDescription && titleGenreDescription.title
  );
  //state for title genre and description.. If we are updating the blog
  // the blog contents will be displayed first as the initial value of states
  const [genre, setGenre] = useState(
    titleGenreDescription && titleGenreDescription.genre
  );
  const [description, setDescription] = useState(
    titleGenreDescription && titleGenreDescription.description
  );
  return (
    <form className="flex flex-col justify-center items-center">
      {(isFromCreatePage || userid === sessionid) && (
        //checks whether user is creating blog if not it checks if the user is the creator of the blog
        <div className="">
          <Input onchange={setTitle} value={title} label="Title" />
          <Input onchange={setGenre} value={genre} label="Genre" />
          <Textarea
            onchange={setDescription}
            value={description}
            label="Short Description"
          />
        </div>
      )}
      <div id="editorjs" className=" w-full " />

      {isFromCreatePage ? (
        <Button
          name="Submit"
          variant="create"
          operation={() => {
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
