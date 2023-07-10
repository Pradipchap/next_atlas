"use client";
import { useSession } from "next-auth/react";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import "@styles/navstyles.css"

export const Nav = () => {
  const navref = useRef();
  const menubarRef=useRef()
  //state of scrolling is downward or upward
  const [isdown, setisdown] = useState(false);

  //stores providers that are allowed in authentication
  const [providers, setProviders] = useState(null);

  //state for is menu opened or not
  const [ismenuclose, setismenuclose] = useState(true);

  //handles the transistion from menu click during scrolling
  const handleMenu = () => {
    setismenuclose((ismenuclose) => !ismenuclose);
    setisdown(false)
  };

  const { data: session } = useSession();//fetches session data


  const [menutoggle, setmenutoggle] = useState(false);//

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  

  //start of window scroll property

  let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
  // Event listener for scroll event
  window.addEventListener("scroll", function () {
    // Get the current scroll position
    var currentScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;

    // Check if scrolling down
    if (currentScrollPos > prevScrollPos) {
      console.log("Scrolling down");
      console.log(` current scroll ${currentScrollPos}`);
      if (currentScrollPos > 150) setisdown(true);
      else {
        setisdown(false);
      }
      // ref.current.style.backgroundColor = "red";
    } else {
      console.log("scrolling up");
      // setisdown(false);
      // ref.current.style.backgroundColor = "black";
    }

    // Update the previous scroll position
    prevScrollPos = currentScrollPos;
  });

  return (
    <div className="flex flex-col justify-center items-center">
      {
        //menu
        //
        !isdown? (
          <nav
            className={`navbar ${
              isdown ? "down" : "up"
            } flex bg-black w-max justify-center py-4 rounded-full  px-5 gap-5 text-white items-center my-5 m-auto fixed top-12`}
            ref={navref}
          >
            <Link href="/">Home</Link>
            {session?.user && <Link href="/create">create</Link>}
            <Link href="/blogs">Blogs</Link>
            <a href="#navbar">Contact us</a>
          </nav>
        ) : (
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
    </div>
  );
};
