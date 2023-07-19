"use client";
import React from "react";
import Statitem from "./smallcomponents/Statitem";
import { useRef } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
const Stat = () => {
  const statRef = useRef();
  //function that handles when component is in viewport

  return (
    <div
      className="w-full flex flex-wrap justify-around items-center gap-5 py-16"
      ref={statRef}
    >
      <Statitem
        title="Users"
        value={100}
        isPercentage={true}

      />
      <Statitem
        title="Blogs"
        value={220}
        isPercentage={true}

      />
      <Statitem
        title="Engagements"
        value={500}
        isPercentage={true}

      />
    </div>
  );
};
export default Stat;
