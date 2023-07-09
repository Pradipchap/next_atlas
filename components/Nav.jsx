"use client";
import { useSession } from "next-auth/react";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
export const Nav = () => {
  const ref = useRef();
  const [isdown, setisdown] = useState(false);
  const [providers, setProviders] = useState(null);
  const { data: session } = useSession();
  const [menutoggle, setmenutoggle] = useState(false)
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

  // Event listener for scroll event
  window.addEventListener("scroll", function () {
    // Get the current scroll position
    var currentScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;

    // Check if scrolling down
    if (currentScrollPos > prevScrollPos) {
      console.log("Scrolling down");
      console.log(` current scroll ${currentScrollPos}`)
      if(currentScrollPos>120)
      setisdown(true);
      // ref.current.style.backgroundColor = "red";

    } else {
      console.log("scrolling up");
      setisdown(false);
      // ref.current.style.backgroundColor = "black";
    }

    // Update the previous scroll position
    prevScrollPos = currentScrollPos;
  });

  return (
    <div className="">
      <nav
        className={`navbar ${isdown?"down":"up"} flex bg-black w-max justify-center py-4 rounded-full m-auto px-5 gap-5 text-white items-center my-5  `}
        ref={ref}
      >
        <Link href="/">Home</Link>
        {session?.user && <Link href="/create">create</Link>}
        <Link href="/blogs">Blogs</Link>
        <Link href="/">Contact us</Link>
      </nav>
    </div>
  );
};
