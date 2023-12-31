"use client";

import TagComp from "@/components/BodyComps/TagComp";
import HeaderBarComp from "@/components/HeaderComps/HeaderBarComp";
import BackgroundComp from "@/components/MiscComps/BackgroundComp";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Admin = () => {

  const { data: session, status } = useSession();

  const [manageWindow, setManageWindow] = useState({
    managePosts: true,
    manageTags: false,
  });

  function test(key: number) {
    switch (key) {
      case 0:
        setManageWindow({
          managePosts: true,
          manageTags: false,
        });
        break;
      case 1:
        setManageWindow({
          managePosts: false,
          manageTags: true,
        });
        break;
    };
  }

  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <HeaderBarComp/>

      <div className="pt-[12vh] md:pt-[6vh]">
        <ul className="w-full flex flex-row gap-2 h-[8vh] md:h-[4vh] items-center px-4 z-20 bg-neutral-950/20 backdrop-blur text-sm">
          <li>
            <input type="radio" id="managePosts" name="windowManager" className="hidden peer" defaultChecked/>
            <label htmlFor="managePosts" onClick={() => test(0)} className="hover:text-teal-400 peer-checked:text-teal-400 ease-in-out duration-500 cursor-pointer">Manage Posts</label>
            <div className="h-0.5 w-0 peer-checked:w-full bg-teal-400 ease-in-out duration-500"/>
          </li>
          <li>
            <input type="radio" id="manageTags" name="windowManager" className="hidden peer"/>
            <label htmlFor="manageTags" onClick={() => test(1)} className="hover:text-teal-400 peer-checked:text-teal-400 ease-in-out duration-500 cursor-pointer">Manage Tags</label>
            <div className="h-0.5 w-0 peer-checked:w-full bg-teal-400 ease-in-out duration-500"/>
          </li>
        </ul>

        {manageWindow.managePosts && (
          <div className="px-4 py-2">
            <h2>MANAGE POSTS</h2>
            <div>

            </div>
          </div>
        )}

        {manageWindow.manageTags && (
          <div className="px-4 py-2">
            <h2 className="pb-2">MANAGE TAGS</h2>
            <div className="flex flex-wrap gap-3">
              <button className="flex place-items-center hover:bg-orange-400 bg-orange-600 rounded overflow-hidden ease-in-out duration-500 text-sm">
                <span className="bg-neutral-900/30 px-1.5 py-1.5 mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 -m-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span> 
                <p className="pl-1 pr-2">Create Tag</p>
              </button>
              <TagComp/>
              <TagComp/>
              <TagComp/>
              <TagComp/>
              <TagComp/>
              <TagComp/>
              <TagComp/>
              <TagComp/>
              <TagComp/>
              <TagComp/>
              <TagComp/>
              <TagComp/>
              <TagComp/>
              <TagComp/>
              <TagComp/>
            </div>
          </div>
        )}
        {/* <pre>{JSON.stringify(session, null, 4)}</pre> */}
      </div>
      <BackgroundComp useImage={false}/>
    </div>
  );
};

export default Admin;