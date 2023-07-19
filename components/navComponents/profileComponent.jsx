"use client"
import React from "react";
import { signIn } from "next-auth/react";
import { IoCreateOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Profilecard from "@components/smallcomponents/Profilecard";
const ProfileComponent = ({
  status,
  session,
  handleToggleDropdown,
  sethandleToggleDropdown,
  handlelogout,
}) => {
  return (
    <div className="">
      <div className="flex sm:nav-large nav-small adjust-center">
        <Link
          href="/create"
          className="flex gap-1 items-center justify-center sm:animate-bounce"
        >
          <IoCreateOutline size={25} />
          Write
        </Link>
        {status === "authenticated" ? (
          <div className="flex justify-center items-center gap-3">
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
              <Profilecard session={session} handlelogout={handlelogout} />
            )}
          </div>
        ) : (
          <button
            type="button"
            className="cap"
            onClick={() => {
              sethandleToggleDropdown(false);
              signIn({});
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};
export default ProfileComponent;
