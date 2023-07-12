import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
export  function useCustomSession(){
    const {session,loading}= useSession()
    console.log(sessin)
    return {session,loading}
}