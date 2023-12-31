"use client";

import { displayDateAsString, displayTimeAsString } from "@/app/utilities";

const PostDateComp = ({cDate, uDate}: {cDate: Date, uDate: Date}) => {

  const Updated = (cDate.toISOString() !== uDate.toISOString());

  return(
    <div className="flex flex-row gap-3 text-sm mt-3">
      <div>
        <p className="text-teal-400">Created on:</p>
        <p className="">{displayTimeAsString(cDate) + " | " + displayDateAsString(cDate)}</p>
      </div>
      {Updated && (
        <div className="border-l border-solid border-teal-400 pl-3">
          <p className="text-teal-400">Updated on:</p>
          <p className="">{displayTimeAsString(uDate) + " | " + displayDateAsString(uDate)}</p>
        </div>
      )}
    </div>
  );
};

export default PostDateComp;