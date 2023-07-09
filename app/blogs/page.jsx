"use client";
import BlogCard from "@/components/Blogcard";

import { useEffect, useState } from "react";
export default function Blogs() {
  const [documents, setdocuments] = useState([]);
  useEffect(() => {
    const getDocuments = async () => {
      const data = await fetch("/api/blogs");
      const parseddata = await data.json();
      setdocuments(parseddata);
      console.log(`dosuments are, ${documents}`)
    };
    getDocuments()
  }, []);

  // Use the documents data in your component

  return (
    <div className="allblogs">
      {documents.map((element) => {
        return (
          <BlogCard title={element.title} description={element.description} />
        );
      })}
    </div>
  );
}
