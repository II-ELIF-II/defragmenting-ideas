import { getEnvironment } from "@/app/utilities";

export const getTag = async(id: number) => {
  const res = await fetch(getEnvironment().concat(`/api/getTag?id=${id}`),{
    cache: "no-store",
  });

  if(!res.ok){
    throw new Error("Failed to get post!");
  }
  return res.json();
};