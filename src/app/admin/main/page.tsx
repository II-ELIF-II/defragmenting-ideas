"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminMain = () => {

  const router = useRouter();

  const { data: session, status } = useSession();

  const checkAdminStatus = () => {
    //Soft check if user is admin
    if(!session?.user?.isAdmin && status !== "loading") {
      // signOut();
      router.replace("/admin");
    }
  }

  // useEffect(() => {
  //   checkAdminStatus();
  // },[checkAdminStatus])

  

  if(status != "loading")
    console.log(session)

  return (
    <div className="flex flex-col">
      <p>{session?.user?.email}</p>
      <button onClick={() => signOut()}>logout</button>
    </div>
  )
};

export default AdminMain;