"use client"

import BackgroundComp from "@/components/MiscComps/BackgroundComp";
import { FormEvent, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import loginCredsParams from "@/types/loginCredsParams";
import HeaderBarComp from "@/components/HeaderComps/HeaderBarComp";
import BasicCardComp from "@/components/MiscComps/CardComps/BasicCardComp";

const Login = () => {

  const [loginData, setLoginData] = useState<loginCredsParams>({
    email:"",
    password:""
  });
  
  const [error, setError] = useState("");

  const router = useRouter();
  const { data: session, status } = useSession();

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

      router.replace("/admin");
    } catch (e)
    {
      console.log(e);
    }
  };

  //Check if user is already logged
  if(session)
  {
    if(session.user.isAdmin)
      router.replace("/admin");
  }

  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <HeaderBarComp/>
      <BasicCardComp TextMain="User Authentication" TextSide="LOGIN">
        <form onSubmit={handleLoginSubmit} className="flex flex-col h-fit text-sm md:text-xl pt-2 text-justify">
          <div className="grid grid-cols-4 px-3 gap-y-2 items-center">
            <label htmlFor="email" className="text-sm w-fit">Email:</label>
            <input type="email" id="email" name="email" placeholder="" value={loginData.email} required onChange={(e) => setLoginData({...loginData, email: e.target.value})} className="col-span-3 px-2 py-1 text-sm text-neutral-300 w-full bg-neutral-800/80 outline-none focus:bg-teal-700/50  ease-in-out duration-500"/>
            <label htmlFor="password" className="text-sm w-fit">Password:</label>
            <input type="password" id="password" name="password" placeholder="" value={loginData.password} required onChange={(e) => setLoginData({...loginData, password: e.target.value})} className="col-span-3 px-2 py-1 text-sm text-neutral-300 w-full bg-neutral-800/80 outline-none focus:bg-teal-700/50  ease-in-out duration-500"/>
          </div>
          <div className="flex flex-row-reverse justify-between items-end">
            <input type="submit" id="submit" name="submit" value="Authorize" className="w-fit cursor-pointer text-sm mt-2 py-1 px-4 text-md bg-teal-600 transition-all ease-in-out duration-600 hover:bg-teal-400 active:bg-teal-700"/>
            {error && (<p className="mt-2 py-1 px-2 text-sm font-bold text-neutral-800 bg-red-500/80 animate-slideInRight w-fit">{error}</p>)}
          </div>
        </form>
      </BasicCardComp>
      <BackgroundComp/>
    </div>
  )
}
export default Login