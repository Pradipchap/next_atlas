import React from 'react'
import { getServerSession } from 'next-auth'
const getMyBlogs=async=()=>{
    // const {data:session}=await getServerSession();

    const res=await fetch("http://localhost:3000/api/blogs/",{
        method:"POST",
        body:{
            _id:session.user,

        }
    })

}
const update=async()=>{
    "use server"

  }
 const page = () => {
  return (
    <div>my blogs</div>
  )
}

export default page