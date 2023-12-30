'use client'

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

const Logout = () => {
 
  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if(session)
    {
      console.log("logged out");
      signOut();
    }
    else if(!session)
    {
      router.replace("/login");
    }
  },[])
  

  return (
    <>
    </>
  );
};

export default Logout;