import React from 'react'

export default function Menu({handleMenu,menubarRef}) {
  return (
    <div
    className="menu bg-black px-4 py-3 fixed top-20 right-2 mx-5 flex justify-between items-center gap-2 rounded-3xl"
    onClick={handleMenu}
    ref={menubarRef}
  >
    {/* {styles related to hover effect of menu is in navstyles.css } */}
    <div className="menubar flex flex-col gap-2">
      <div className="m1 bg-white w-6 h-0.5 rounded-sm"></div>
      <div className="m2 bg-white w-6 h-0.5 rounded-sm"></div>
    </div>
    <p className="menutext text-white">Menu</p>
  </div>
  )
}
