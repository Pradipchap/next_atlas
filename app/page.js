"use client"
import Svg from "@components/svg";
import { useSession } from "next-auth/react";

import Image from "next/image";

export  default  function Home() {
  // const { session, loading } =await useCustomSession();
const {data:session}= useSession()
console.log(session)

  return (
    <div className="h-[60rem] w-full mt-[20rem] m-auto">

      <h1>{session?.user.name}</h1>
    </div>
  );
}
