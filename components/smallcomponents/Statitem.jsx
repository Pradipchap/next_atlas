"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { PiUserLight } from "react-icons/pi";
import ReactVisibilitySensor from "react-visibility-sensor";
const Statitem = ({ title, value, isPercentage, icon }) => {
  const [x, setX] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  

  if(isVisible===true){
    let a=setInterval(() => {
      
      if(x<=200){
        setX(x=>x+10)
      }
    }, 1000);
    if(x==200){
    clearInterval(a)
    }

  }

  


  return (
    <ReactVisibilitySensor onChange={(status)=>setIsVisible(status)}>
      <div className=" border-2 border-black rounded-xl h-52 w-72 gap-5 flex justify-center items-center">
        <PiUserLight color="red" className=" w-16 h-16 " />
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-2xl font-black">{title}</p>
          <p className=" asd text-2xl font-bold">{x}</p>
        </div>
      </div>
    </ReactVisibilitySensor>
  );
};
export default Statitem;
