"use client";
import React from "react";
import Statitem from "./smallcomponents/Statitem";
import { useRef } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
const Stat = () => {
  const [isVisible, setIsVisible] = useState(false);

  const statRef = useRef();
  //function that handles when component is in viewport
  function onChange(isVisible) {
    isVisible && setIsVisible(true);
  }

  return (
    <ReactVisibilitySensor onChange={onChange}>
      <div
        className="w-full flex flex-wrap justify-around items-center gap-5 py-16"
        ref={statRef}
      >
        <Statitem
          title="Users"
          value={100}
          isPercentage={true}
          isVisible={isVisible}
        />
        <Statitem
          title="Blogs"
          value={220}
          isPercentage={true}
          isVisible={isVisible}
        />
        <Statitem
          title="Engagements"
          value={500}
          isPercentage={true}
          isVisible={isVisible}
        />
      </div>
    </ReactVisibilitySensor>
  );
};
export default Stat;
