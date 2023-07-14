

import { getServerSession } from "next-auth";
import { AuthOptions } from "next-auth";
import Image from "next/image";
import { getSession } from "next-auth/react";

  const Home=() =>{
  // const { session, loading } =await useCustomSession();


  return (
    <div className="h-[60rem] w-full mt-[20rem] m-auto">

{/* {session.user.name} */}ads
    </div>
  );
}
export default Home