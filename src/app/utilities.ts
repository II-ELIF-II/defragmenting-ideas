export const StopPropagation = (e: React.MouseEvent) => {
  e.stopPropagation()
}

export const getEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://elifsplayground.netlify.app/";

  return base_url;
}