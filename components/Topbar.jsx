"use client";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
const Topbar = () => {
  const {data:session}=useSession()
  const [handleToggleDropdown, sethandleToggleDropdown] = useState(false);
  return (
    <div className="flex justify-between px-4 bg-blue-600 py-2 mb-5 text-white items-center">
      <Link href="/">Take a look at our github</Link>
      {/* <Link href="/">{session&&session.user.name+session.expires}</Link> */}
      {/* <button onClick={()=>signOut()}>logout</button> */}
      {/* {session&& <Image ref={session.user.image} width={30} height={30} alt="photo of the user"/>} */}
      {/* <pre>{JSON.stringify(session.user)}</pre> */}
      {/* <img src={session.user.image} alt="" /> */}

      {session?<div className="flex gap-2  items-center">
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
      </div>:<button type="button" className="cap" onClick={()=>signIn()} >Login</button>}
      {handleToggleDropdown && (
        <div className="bg-slate-500  absolute top-14 right-8 py-3 px-3 flex flex-col gap-2 justify-start items-start ">
          <p className="email">{session?.user.email}</p>
          <button type="button" className="bg-black rounded-full px-3 py-2 text-xs" onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Topbar;
