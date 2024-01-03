import { getEnvironment } from "@/app/utilities";

export const getPostTags = async(id: string) => {
  const res = await fetch(getEnvironment().concat(`/api/getPostTags?postId=${id}`),{
    cache: "no-store",
  });

  if(!res.ok){
    throw new Error("Failed to get post tags!");
  }

  return res.json();
};