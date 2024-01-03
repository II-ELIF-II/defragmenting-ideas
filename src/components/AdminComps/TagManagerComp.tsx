"use client";

import { useRouter } from "next/navigation";
import TagComp from "../MiscComps/TagComp";
import { useSession } from "next-auth/react";
import tagParams from "@/types/tagParams";

const TagManagerComp = ({tagResults}: {tagResults: tagParams[]}) => {

  const router = useRouter();

  const { data: session, status } = useSession();

  const handleSubmitTag = async () => {
    const payload = {
      userId: session?.user.id,
      tagName: prompt("Enter tag name:", ""),
    }

    await fetch('/api/admin/createTag', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    router.refresh();
  }

  return(
    <div className="flex flex-col justify-between">
      <div className="animate-slideInTop md:animate-slideInRight grid grid-cols-2 md:grid-cols-8 gap-3 p-2">
        <button type="button" onClick={() => handleSubmitTag()} className="flex place-items-center hover:bg-orange-400 bg-orange-600 rounded overflow-hidden ease-in-out duration-500 text-sm">
          <span className="bg-neutral-900/30 px-1.5 py-1.5 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 -m-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </span> 
          <p className="pl-1 pr-2">Create Tag</p>
        </button>
        {tagResults.map((tag: tagParams) => (<TagComp key={tag.id} tag={tag}/>))}
      </div>
    </div>
  );
};

export default TagManagerComp;