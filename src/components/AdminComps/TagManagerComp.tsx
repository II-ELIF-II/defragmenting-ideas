"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import tagParams from "@/types/tagParams";
import TagManagerTagComp from "./TagManagerComps/TagManagerTagComp";
import manageTagPayload from "@/types/payload/manageTagPayload";
import { manangeTag } from "@/lib/admin/postManageTag";

const TagManagerComp = ({tagResults}: {tagResults: tagParams[]}) => {

  const router = useRouter();

  const { data: session, status } = useSession();

  // TO DO: combine handleSubmit and handleUpdate
  // Implement id detection on backend to determine if update or new tag
  const handleTagManagement = async (tag?: tagParams) => {
    const payload = {
      userId: session?.user.id,
      tagId: tag?.id || 0,
      tagName: "",
    } as manageTagPayload;

    do {
      //Ask for new tag name input
      payload.tagName = (prompt(`Enter a unique tag name: `, `${tag ? tag.name : ''}`)) as string;
      //Validate
      //Check if cancelled prompt
      if(payload.tagName == null)
        return;

      //Check if tag is empty or oversized or if its the same name its renaming
      if(payload.tagName === '' || payload.tagName.length > 25 || (tag && tag.name === payload.tagName)) {
        if (!confirm("the Tags name must be new, unique, not empty, and cannot be longer than 25 characters, try again?"))
          return;
      } else break; //Exit loop if all checks are valid
      
    }
    while(true);

    manangeTag(payload);
    router.refresh();
  }

  return(
    <div className="flex flex-col justify-between">
      <div className="animate-slideInTop md:animate-slideInRight grid grid-cols-2 md:grid-cols-8 gap-3 p-2">
        <button type="button" onClick={() => handleTagManagement()} className="flex place-items-center hover:bg-orange-400 bg-orange-600 rounded overflow-hidden ease-in-out duration-500 text-sm">
          <span className="bg-neutral-900/30 px-1.5 py-1.5 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 -m-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </span> 
          <p className="pl-1 pr-2">Create Tag</p>
        </button>
        {tagResults.map((tag: tagParams) => (<TagManagerTagComp key={tag.id} tag={tag} handleTagManagement={handleTagManagement}/>))}
      </div>
    </div>
  );
};

export default TagManagerComp;