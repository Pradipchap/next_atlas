"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";

import ReactVisibilitySensor from "react-visibility-sensor";
const Statitem = ({ title, value, isPercentage, icon }) => {
  const [x, setX] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let interval;

    if (isVisible) {
      if (x < value) {
        interval = setInterval(() => {
          setX((prevX) => {
            const newX = prevX + 2;
            return newX;
          });
        }, 5);
      }
    }


    return () => clearInterval(interval);
  }, [x, isVisible]);
  return (
    <ReactVisibilitySensor onChange={(status) => setIsVisible(status)}>
      <div className=" border-2 border-black rounded-xl h-52 w-72 gap-5 flex justify-center items-center">
        {/* {icon} */}
        {icon}
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-2xl font-black">{title}</p>
          <p className=" asd text-2xl font-bold">{x}+</p>
        </div>
      </div>
    </ReactVisibilitySensor>
  );
};
export default Statitem;
