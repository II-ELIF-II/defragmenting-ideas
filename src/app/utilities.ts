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

export const isDevEnvironment = () => {
  return process.env.NODE_ENV === "development";
}

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

export const displayTimeAsString = (dateTime: Date) =>{
  let time = "";

  if (dateTime.getHours() > 12)
    time = (dateTime.getHours() - 12) + ":" + dateTime.getMinutes() + " PM"; 
  else
    time = dateTime.getHours() + ":" + dateTime.getMinutes() + " AM"; 

  return time;
}

export const displayDateAsString = (dateTime: Date) => {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  function getOrdinalSuffix(i: number) {
    let j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }

  return (months[dateTime.getMonth()] + " " + getOrdinalSuffix(dateTime.getDate()) + " " + dateTime.getFullYear());
}

export const getTimezone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

// INSERT INTO Post(id, title, thumbnail, summary, content, updatedAt) VALUES (7, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula e", "https://i.imgur.com/sDBLZmY.png", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.", CURRENT_TIMESTAMP(3));