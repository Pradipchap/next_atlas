import Blogpage from "@components/Blogpage";
import MainBlogs from "@components/MainBlogs";
import Divider from "@components/smallcomponents/divider";
import Trending from "@components/trending";



const page = () => {
  return (
    <div className=" flex  flex-row gap-2 justify-center items-start">
      <MainBlogs />
      <Divider horizontal={false} />
      <Trending />
    </div>
  );
};
export default page;
