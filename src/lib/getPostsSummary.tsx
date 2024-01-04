import { getEnvironment } from "@/app/utilities";
import postSearchParams from "@/types/postSearchParams";

export const getPostsSummary = async(searchParams: postSearchParams) => {
  const res = await fetch(getEnvironment().concat(`/api/getPostsSummary?page=${searchParams.page}&query=${searchParams.query}&tag=${searchParams.tag}`),{
    cache: "no-store",
  });

  if(!res.ok){
    throw new Error("Failed");
  }
  return res.json();
};