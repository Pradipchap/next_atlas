import Link from 'next/link'
import React from 'react'

export default function NavLinks({name,path}) {
  return (
<Link href={path} className=''>{name}</Link>
  )
}
