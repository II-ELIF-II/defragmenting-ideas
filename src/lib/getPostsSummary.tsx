import { getEnvironment } from "@/app/utilities";
import postListSearchParams from "@/types/postListSearchParams";

export const getPostsSummary = async(SearchParams: postListSearchParams) => {
  const res = await fetch(getEnvironment().concat(`/api/getPostsSummary?page=${SearchParams.page}&query=${SearchParams.query}&tag=${SearchParams.tag}`),{
    cache: "no-store",
  });
  if(!res.ok){
    throw new Error("Failed");
  }
  return res.json();
};