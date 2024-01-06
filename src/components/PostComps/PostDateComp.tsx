"use client";

import { displayDateAsString, displayTimeAsString } from "@/app/utilities";

const PostDateComp = ({cDate, uDate}: {cDate: Date, uDate?: Date}) => {

  const Updated = uDate && (cDate.toString() !== uDate.toString());

  return(
    <div className="flex flex-col md:flex-row gap-1 md:gap-3 text-sm tracking-wider">
      <div>
        <p className="text-xs text-teal-400">Created on:</p>
        <p className="">{displayTimeAsString(cDate) + " | " + displayDateAsString(cDate)}</p>
      </div>
      {Updated && (
        <div className="md:border-l border-solid border-teal-400 md:pl-3">
          <p className="text-xs text-teal-400">Updated on:</p>
          <p className="">{displayTimeAsString(uDate) + " | " + displayDateAsString(uDate)}</p>
        </div>
      )}
    </div>
  );
};

export default PostDateComp;