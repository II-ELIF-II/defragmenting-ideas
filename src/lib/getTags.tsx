import { getEnvironment } from "@/app/utilities";

export const getTags = async() => {
  const res = await fetch(getEnvironment().concat(`/api/getTags`),{
    cache: "no-store",
  });

  if(!res.ok){
    throw new Error("Failed to get tags!");
  }
  return res.json();
};