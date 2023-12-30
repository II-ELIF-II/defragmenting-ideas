"use client";

import HeaderBarComp from "@/components/HeaderComps/HeaderBarComp";
import BackgroundComp from "@/components/MiscComps/BackgroundComp";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Admin = () => {

  const { data: session, status } = useSession();

  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <HeaderBarComp/>
      <div className="pt-[12vh] md:pt-[6vh]">
        <pre>{JSON.stringify(session, null, 4)}</pre>
        <button onClick={() => signOut()}>logout</button>
      </div>
      <BackgroundComp useImage={false}/>
    </div>
  );
};

export default Admin;