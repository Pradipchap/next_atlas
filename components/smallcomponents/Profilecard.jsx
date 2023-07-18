"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Profilecard({ session, handlelogout }) {
  const router = useRouter();
  const items = [
    {
      name: "Profile",
      operation: () => {},
    },
    { name: session?.user.email, operation: () => {} },
    {
      name: "My Blogs",
      operation: () => {
        router.push(`/profile/${session?.user.id}`);
      },
    },
    {
      name: "Sign Out",
      operation: () => {
        handlelogout();
      },
    },
  ];
  return (
    <div className="bg-slate-300  absolute top-14 right-8 py-3 px-3 flex flex-col gap-2 justify-start items-start text-white z-10 ">
      {items.map((element) => {
        return (
          <button
            className="bg-transparent w-full py-2 text-black"
            onClick={element.operation}
          >
            {element.name}
          </button>
        );
      })}
    </div>
  );
}
