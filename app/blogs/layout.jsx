import React from 'react'

export default function BlogLayout({children,mainblogs,sideblogs}) {
  return (
<div className='flex'>
{children}
{mainblogs}
{sideblogs}
</div>
  )
}
