"use client";
import { useSession } from "next-auth/react";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { signIn, signOut, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import "@styles/navstyles.css";
import { useRouter } from "next/navigation";
import NavLinks from "./navLinks";
import { IoCreateOutline } from "react-icons/io5";
import Profilecard from "./smallcomponents/Profilecard";
import Menu, { Hamburger } from "./smallcomponents/Menu";
import Logo from "@public/blogit.png";
import ProfileComponent from "./navComponents/profileComponent";
export const Nav = () => {
  const { data: session, status } = useSession();
  const [handleToggleDropdown, sethandleToggleDropdown] = useState(false);
  const [isdown, setIsDown] = useState(false); //state of scrolling is downward or upward

  //stores providers that are allowed in authentication
  const [providers, setProviders] = useState(null);

  //state for is menu opened or not
  const [ismenuclose, setIsMenuClose] = useState(true);
  const router = useRouter();

  const handlelogout = () => {
    sethandleToggleDropdown(false);
    signOut();
    router.push("/");
  };
  const navref = useRef();
  const menubarRef = useRef();

  //handles the transistion from menu click during scrolling
  const handleMenu = () => {
    setIsMenuClose((ismenuclose) => !ismenuclose);
    setIsDown(false);
  };

  //fetches session data
  // console.log(session?.user.name);

  const [menutoggle, setmenutoggle] = useState(false); //

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  useEffect(() => {
    let prevScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;
    window.addEventListener("scroll", function () {
      // Get the current scroll position
      var currentScrollPos =
        window.pageYOffset || document.documentElement.scrollTop;

      // Check if scrolling down
      if (currentScrollPos > prevScrollPos) {
        // console.log("Scrolling down");
        // console.log(` current scroll ${currentScrollPos}`);
        if (currentScrollPos > 150) setIsDown(true);
        else {
          setIsDown(false);
        }
        // ref.current.style.backgroundColor = "red";
      } else {
        // console.log("scrolling up");
        // setIsDown(false);
        // ref.current.style.backgroundColor = "black";
      }

      // Update the previous scroll position
      prevScrollPos = currentScrollPos;
    });
  }, []);

  // start of window scroll property

  // Event listener for scroll event

  return (
    <div className="flex flex-col justify-center items-center sm:mb-20 adjust-center mb-40 ">
      {
        //menu
        //
        !isdown ? (
          <nav
            className={`navbar ${
              isdown ? "down" : "up"
            }  w-full flex bg-white/95  sm:nav-large py-4  px-5 text-black text-md   m-auto fixed top-0  nav-small adjust-center`}
            ref={navref}
          >
            <div className="sm:flex items-start sm:nav-large nav-small justify-start ">
              <NavLinks
                path="/"
                name={<Image src={Logo} alt="logo" width={30} height={30} />}
              />

              <NavLinks path="/blogs" name="Blogs" />
              <NavLinks name="Contact us" path="#footer" />
            </div>
            <ProfileComponent
              status={status}
              session={session}
              handleToggleDropdown={handleToggleDropdown}
              sethandleToggleDropdown={sethandleToggleDropdown}
              handlelogout={handlelogout}
            />

          </nav>
        ) : (
          <Menu handleMenu={handleMenu} menubarRef={menubarRef} />
        )
      }
    </div>
  );
};
