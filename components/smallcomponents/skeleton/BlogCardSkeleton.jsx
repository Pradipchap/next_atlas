import React from "react";
import PhotoSkeleton from "./PhotoSkeleton";
import TitleSkeleton from "./TitleSkeleton";
import DescriptionSkeleton from "./descriptionSkeleton";
import CircleSkeleton from "./CircleSkeleton";

export default function BlogCardSkeleton() {
  return (
    <div className="flex gap-20 justify-center animate-pulse ">
      <PhotoSkeleton />
      <div className="flex flex-col gap-3 justify-center">
        <TitleSkeleton />
        <DescriptionSkeleton />
        <div className="flex gap-3 justify-center items-center">
          <CircleSkeleton />
          <TitleSkeleton/>
        </div>
      </div>
    </div>
  );
}
