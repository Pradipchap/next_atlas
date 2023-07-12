
import Blogsfeed from '@components/b'
import React from 'react'
import BlogCard from '@components/Blogcard';
const getBlog=async()=>{
  const res=await fetch('http:localhost:3000/api/blogs');
  const parsed=await res.json()
  return parsed
}
export default async function Blogpage() {
  const blogs=await getBlog()
 
  

  return blogs.map((element) => {
    return (
      <BlogCard
        title={element.title}
        // description={element.description}
        // userid={element.userid}
        _id={element._id}
        // update={null}
        
      />
    );
  });
}