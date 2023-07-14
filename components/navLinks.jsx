import Link from 'next/link'
import React from 'react'

export default function NavLinks({name,path}) {
  return (
<Link href={path} className='mx-3 my-2'>{name}</Link>
  )
}
