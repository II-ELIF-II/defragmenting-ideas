import { getEnvironment } from "@/app/utilities";

export const getPost = async(id: string) => {
  const res = await fetch(getEnvironment().concat(`/api/getPost?id=${id}`),{
    cache: "no-store",
  });

  if(!res.ok){
    throw new Error("Failed to get post!");
  }
  return res.json();
};