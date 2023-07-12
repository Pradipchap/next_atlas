"use client";
import { useSession } from "next-auth/react";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import "@styles/navstyles.css"
import { useRouter } from "next/navigation";
export const Nav = () => {
  const [handleToggleDropdown, sethandleToggleDropdown] = useState(false);
  const router = useRouter();

  const handlelogout = () => {
    sethandleToggleDropdown(false)
    signOut(),

    
    router.push("/");
  };
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

  

  // start of window scroll property
  // let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
  // // Event listener for scroll event
  // window.addEventListener("scroll", function () {
  //   // Get the current scroll position
  //   var currentScrollPos =
  //     window.pageYOffset || document.documentElement.scrollTop;

  //   // Check if scrolling down
  //   if (currentScrollPos > prevScrollPos) {
  //     console.log("Scrolling down");
  //     console.log(` current scroll ${currentScrollPos}`);
  //     if (currentScrollPos > 150) setisdown(true);
  //     else {
  //       setisdown(false);
  //     }
  //     // ref.current.style.backgroundColor = "red";
  //   } else {
  //     console.log("scrolling up");
  //     // setisdown(false);
  //     // ref.current.style.backgroundColor = "black";
  //   }

  //   // Update the previous scroll position
  //   prevScrollPos = currentScrollPos;
  // });

  return (
    <div className="flex flex-col justify-center items-center">
      {
        //menu
        //
        !isdown? (
          <nav
            className={`navbar ${
              isdown ? "down" : "up"
            } flex bg-black justify-between py-4  px-5  text-white items-center  m-auto fixed top-6 w-full`}
            ref={navref}
          >
            <div className="flex justify-center items-center gap-5">
            <Link href="/">Home</Link>
            {session?.user && (<Link href="/create">create</Link>,
            
            )
            }
            <Link href="/Blogs">Blogs</Link>
            <Link href="/editor">editor</Link>
            <a href="#navbar">Contact us</a>
            
            </div>
        <div className="">
        {session ? (
        <div className="flex gap-2  items-center">
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
        </div>
      ) : (
        <button type="button" className="cap" onClick={() =>{ signIn()
        
        sethandleToggleDropdown(false)}}>
          Login
        </button>
      )}
        </div>
      {handleToggleDropdown && (
        <div className="bg-slate-500  absolute top-14 right-8 py-3 px-3 flex flex-col gap-2 justify-start items-start ">
          <p className="email">{session?.user.email}</p>
          <Link href="/profile">Profile</Link>
          <Link href="/profile/myblogs" className="myblogs">My Blogs</Link>
          <button
            type="button"
            className="bg-black rounded-full px-3 py-2 text-xs"
            onClick={handlelogout}
          >
            Sign Out
          </button>
        </div>
      )}
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
