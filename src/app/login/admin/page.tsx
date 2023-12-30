"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const AdminMain = () => {

  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col">
      <pre>{JSON.stringify(session, null, 4)}</pre>
      <button onClick={() => signOut()}>logout</button>
    </div>
  );
};

export default AdminMain;