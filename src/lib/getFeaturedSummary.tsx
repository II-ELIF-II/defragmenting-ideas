import { getEnvironment } from "@/app/utilities";

export const getFeaturedSummary = async() => {
  const res = await fetch(getEnvironment().concat("/api/getFeaturedSummary"),{
    cache: "no-store",
  });

  if(!res.ok){
    throw new Error("Failed to get featured summary!");
  }

  return res.json();
};