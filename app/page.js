import Blogpage from "@components/Blogpage";
import Divider from "@components/smallcomponents/divider";
import { Suspense } from "react";

import PhotoSkeleton from "@components/smallcomponents/skeleton/PhotoSkeleton";
import TitleSkeleton from "@components/smallcomponents/skeleton/TitleSkeleton";
import DescriptionSkeleton from "@components/smallcomponents/skeleton/descriptionSkeleton";
import CircleSkeleton from "@components/smallcomponents/skeleton/CircleSkeleton";
import BlogCardSkeleton from "@components/smallcomponents/skeleton/BlogCardSkeleton";

const page = () => {
  return <h1>as</h1>;
};
export default page;
// {/* <div className=" flex  flex-row gap-2 justify-center items-start">
//       <div className="w-[50rem]">
//         <Blogpage
//           title="Recent Blogs"
//           fetchUrl="http://localhost:3000/api/blogs"
//         />
//       </div>
//       <Divider horizontal={false}/>
//       <div className="w-[30rem]  max-lg:hidden">
//         <Blogpage
//           title="Featured Blogs"
//           fetchUrl="http://localhost:3000/api/blogs"
//         />
//       </div>
//     </div> */}
