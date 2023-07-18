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
import Menu from "./smallcomponents/Menu";
export const Nav = () => {
  const { data: session } = useSession();
  const [handleToggleDropdown, sethandleToggleDropdown] = useState(false);
  const [isdown, setIsDown] = useState(false); //state of scrolling is downward or upward

  //stores providers that are allowed in authentication
  const [providers, setProviders] = useState(null);

  //state for is menu opened or not
  const [ismenuclose, setIsMenuClose] = useState(true);
  const router = useRouter();

  const handlelogout = () => {
    sethandleToggleDropdown(false);
    signOut(); router.push("/");
  };
  const navref = useRef();
  const menubarRef = useRef();

  //handles the transistion from menu click during scrolling
  const handleMenu = () => {
    setIsMenuClose((ismenuclose) => !ismenuclose);
    setIsDown(false);
  };

  //fetches session data
  console.log(session?.user.name);

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
        console.log("Scrolling down");
        console.log(` current scroll ${currentScrollPos}`);
        if (currentScrollPos > 150) setIsDown(true);
        else {
          setIsDown(false);
        }
        // ref.current.style.backgroundColor = "red";
      } else {
        console.log("scrolling up");
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
    <div className="flex flex-col justify-center items-center mb-20">
      {
        //menu
        //
        !isdown ? (
          <nav
            className={`navbar ${
              isdown ? "down" : "up"
            } flex bg-white justify-between py-4  px-5  text-black text-md items-center  m-auto fixed top-0 w-full border-b`}
            ref={navref}
          >
            <div className="flex justify-center items-center gap-5">
              <NavLinks path="/" name="Home" />

              <NavLinks path="/blogs" name="Blogs" />

              <a href="#navbar">Contact us</a>
            </div>
            <div className="">
              {session ? (
                <div className="flex gap-5  items-center">
                  <Link
                    href="/create"
                    className="flex gap-1 items-center justify-center animate-bounce"
                  >
                    <IoCreateOutline size={25} />
                    Write
                  </Link>
                  <p className="capitalize">{session.user.name}</p>
                  <span
                    onClick={() =>
                      sethandleToggleDropdown(
                        (handleToggleDropdown) => !handleToggleDropdown
                      )
                    }
                  >
                    <Image
                      src={session.user.image}
                      className="rounded-full"
                      width={40}
                      height={40}
                      alt="profile-photo"
                    />
                  </span>
                  {handleToggleDropdown && (
                    <Profilecard
                      session={session}
                      handlelogout={handlelogout}
                    />
                  )}
                </div>
              ) : (
                <button
                  type="button"
                  className="cap"
                  onClick={() => {
                    signIn();

                    sethandleToggleDropdown(false);
                  }}
                >
                  Login
                </button>
              )}
            </div>
          </nav>
        ) : (
          <Menu handleMenu={handleMenu} menubarRef={menubarRef} />

        )
      }
    </div>
  );
};
