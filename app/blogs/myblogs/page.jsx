"use client";
import BlogCard from "@components/Blogcard";
import { useSession } from "next-auth/react";
import { useEffect,useState } from "react";
import React from "react";

export default function Myblogs() {
  const {data:session}=useSession()
  const [email, setemail] = useState(session.user.email)
  const [documents, setdocuments] = useState([]);
  useEffect(() => {
    const getDocuments = async () => {
      const user=await fetch(`/api/user?email=${email}`)
      const userid=await user.json().userid
      const data = await fetch(`/api/blogs/myblogs?userid=${userid}`);
      const parseddata = await data.json();
      setdocuments(parseddata);
      console.log(`dosuments are, ${JSON.stringify(parseddata[0])}`);
    };
    if(email)
    getDocuments();
  }, [email]);
  return (
    <div>
      {documents.map((element) => {
        return (
          <BlogCard
            title={element.title}
            description={element.description}
            userid={element.userid}
            _id={element._id}
            // updateDoc={updateDoc}
            key={element._id}
          />
        );
      })}
    </div>
  );
}
