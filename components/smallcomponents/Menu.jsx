import React from "react";

export default function Menu({ handleMenu, menubarRef, forNavbar = false }) {
  return (
    <div
      className={`menu ${
        !forNavbar ? "bg-black" : "bg-white"
      } px-4 py-3 fixed top-20 right-2 mx-5 flex justify-between items-center gap-2 rounded-3xl`}
      onClick={handleMenu}
      ref={menubarRef}
    >
      {/* {styles related to hover effect of menu is in navstyles.css } */}
      <Hamburger />
      {!forNavbar && <p className="menutext text-white">Menu</p>}
    </div>
  );
}

export const Hamburger = ({ color = "white" }) => {
  return (
    <div className="menubar flex flex-col gap-2">
      <div className={`m1 bg-${color} w-6 h-0.5 rounded-sm`}></div>
      <div className={`m2 bg-${color} w-6 h-0.5 rounded-sm`}></div>
    </div>
  );
};
