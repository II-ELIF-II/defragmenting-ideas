export const StopPropagation = (e: React.MouseEvent) => {
  e.stopPropagation()
};

export const getEnvironment = () => {
  let url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://elifsplayground.netlify.app/";

  return url;
};

export const urlQueryParamAssembler = ({page, query} : {page: Number, query: String}) => {
  let url = "?page=" + page.toString();
  if(query != "")
    url += ("&query=" + query);
  
  return url;
};

export const scrollToElement = (elementID: string) => {
  if (typeof window !== "undefined") {
    let element = document.getElementById(elementID)?.offsetTop as number;

    if (element != null)
    {
      window.scrollTo({
        top: element,
        behavior: 'smooth',
      });
    }
  }
  
}

// INSERT INTO Post(id, title, thumbnail, summary, content, updatedAt) VALUES (7, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula e", "https://i.imgur.com/sDBLZmY.png", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.", CURRENT_TIMESTAMP(3));