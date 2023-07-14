import React from 'react'

export const getdata=async()=>{
  const res=await fetch("http://localhost:3000/api/blogs/myblogs",{cache:"no-cache"})
  const data=res.text();
  return data

}

const page=async() =>{
  const data=await getdata();

  return (
    <h1 className='mt-[20rem]'>{data}</h1>

  )
}
export default page