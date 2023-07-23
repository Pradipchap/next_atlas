import Link from "next/link";
import React from "react";
import Divider from "./smallcomponents/divider";

export default function NavLinks({ name, path }) {
  return (
    <>
      <Link href={path} className=" py-1">
        {name}
      </Link>
      {/* <Divider horizontal={true}/> */}
    </>
  );
}
