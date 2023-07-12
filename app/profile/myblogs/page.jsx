import Myblogpage from '@components/myblogpage'
import React from 'react'

export default function page() {
  const update=async()=>{
    "use server"

  }
  return (
    <div className='mt-[20rem]'>
      <Myblogpage update={update}/>
    </div>
  )
}
