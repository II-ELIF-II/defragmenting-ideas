"use client"

import BackgroundComp from "@/components/MiscComps/BackgroundComp";
import { ChangeEvent, FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import loginCredsParams from "@/types/loginCredsParams";

const Admin = () => {

  const [loginData, setLoginData] = useState<loginCredsParams>({
    email:"",
    password:""
  });
  
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        ...loginData,
        redirect: false,
      });

      if (res?.error)
      {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/admin/main")
    } catch (e)
    {
      console.log(e)
    }
  };

  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <div className="flex flex-col w-80 h-52 bg-neutral-800 z-10 m-auto px-4 py-2 border-t border-teal-400 overflow-hidden justify-center">
        <form onSubmit={handleLoginSubmit} className="flex flex-col w-full">

          <label htmlFor="email" className="text-sm mb-1">Email:</label>
          <input type="email" id="email" name="email" placeholder="" value={loginData.email} required onChange={(e) => setLoginData({...loginData, email: e.target.value})} className="px-2 py-1 text-sm text-neutral-300 w-full bg-neutral-950/50 outline-none focus:bg-teal-700/50  ease-in-out duration-500"/>

          <label htmlFor="password" className="text-sm my-1">Password:</label>
          <input type="password" id="password" name="password" placeholder="" value={loginData.password} required onChange={(e) => setLoginData({...loginData, password: e.target.value})} className="px-2 py-1 text-sm text-neutral-300 w-full bg-neutral-950/50 outline-none focus:bg-teal-700/50  ease-in-out duration-500"/>

          {error && (
            <p className="text-xs mt-1 text-red-500">{error}</p>  
          )}

          <input type="submit" id="submit" name="submit" value="Authorize" className="text-sm mt-2 py-1 px-2 text-md bg-teal-600 transition-all ease-in-out duration-600 hover:bg-teal-400 active:bg-teal-700"/>

        </form>
      </div>
      <BackgroundComp useImage={false}/>
    </div>
  )
}
export default Admin