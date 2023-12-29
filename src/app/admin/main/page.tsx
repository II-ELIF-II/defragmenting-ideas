"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AdminMain = () => {

  const router = useRouter();

  const { data: session, status } = useSession();

  //Soft check if user is admin
  if(!session?.user?.isAdmin && status !== "loading") {
    // signOut();
    router.replace("/admin");
  }

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