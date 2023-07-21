"use client";
import React from "react";
import Statitem from "./smallcomponents/Statitem";
import { BsFilePost } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { PiUserLight } from "react-icons/pi";

const Stat = () => {
  //function that handles when component is in viewport

  return (
    <div className="w-full flex flex-wrap justify-around items-center gap-5 py-16">
      <Statitem
        title="Users"
        value={100}
        isPercentage={true}
        icon={<PiUserLight color="red" className=" w-16 h-16 "/>}
        // icon={<BsFilePost  color="red" className=" w-16 h-16 "/>}
      />
      <Statitem
        title="Blogs"
        value={220}
        isPercentage={true}
        icon={<BsFilePost  color="red" className=" w-16 h-16 "/>}
      />
      <Statitem
        title="Engagements"
        value={500}
        isPercentage={true}
        icon={<BsPeople color="red" className=" w-16 h-16 " />}
      />
    </div>
  );
};
export default Stat;
