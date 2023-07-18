import SideBlogSkeleton from '@components/smallcomponents/skeleton/SideblogSkeleton'
import React from 'react'

export default function Loading() {
  return (
<div className="flex flex-col">
<SideBlogSkeleton tailwindclass={"flex flex-col items-start flex-wrap gap-8 mt-8"}/>
</div>
  )
}
