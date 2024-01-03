"use client";

import PostManagerComp from "@/components/AdminComps/PostManagerComp";
import TagComp from "@/components/MiscComps/TagComp";
import adminPanelPostsParams from "@/types/admin/adminPanelPostsParams";
import { useState } from "react";
import TagManagerComp from "./TagManagerComp";
import tagParams from "@/types/tagParams";

const AdminPanelComp = ({postResults, postQuery, tagResults}: {postResults: adminPanelPostsParams, postQuery: string, tagResults: tagParams[]}) => {

  const enum panels {
    posts,
    tags,
  };
  const [manageWindow, setManageWindow] = useState<panels>(panels.posts);
  
  return(
    <div className="min-h-screen flex flex-col pt-[12vh] md:pt-[6vh]">
      <ul className="w-full flex flex-row gap-2 h-[8vh] md:h-[4vh] items-center px-4 z-20 bg-neutral-800/40 md:backdrop-blur text-sm">
        <li>
          <input type="radio" id="managePosts" name="windowManager" className="hidden peer" defaultChecked/>
          <label htmlFor="managePosts" onClick={() => setManageWindow(panels.posts)} className="hover:text-teal-400 peer-checked:text-teal-400 ease-in-out duration-500 cursor-pointer">Manage Posts</label>
          <div className="h-0.5 w-0 peer-checked:w-full bg-teal-400 ease-in-out duration-500"/>
        </li>
        <li>
          <input type="radio" id="manageTags" name="windowManager" className="hidden peer"/>
          <label htmlFor="manageTags" onClick={() => setManageWindow(panels.tags)} className="hover:text-teal-400 peer-checked:text-teal-400 ease-in-out duration-500 cursor-pointer">Manage Tags</label>
          <div className="h-0.5 w-0 peer-checked:w-full bg-teal-400 ease-in-out duration-500"/>
        </li>
      </ul>

      {(manageWindow === panels.posts) && (
        <PostManagerComp postResults={postResults} postQuery={postQuery}/>
      )}

      {(manageWindow === panels.tags) && (
        <TagManagerComp tagResults={tagResults}/>
      )}

      {/* <pre>{JSON.stringify(session, null, 4)}</pre> */}
    </div>
  );
};

export default AdminPanelComp;