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

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const urlParamHandler = ({path, param, value} : {path: string, param: string, value: any}) => {
  let newUrl = new URL(getEnvironment() + path);

  if(newUrl.searchParams.has(param))
    newUrl.searchParams.set(param, value);
  else
    newUrl.searchParams.append(param, value);

  return newUrl.pathname + newUrl.search;
}

export const urlParamRemove = ({path, param}: {path: string, param: string}) => {
  let newUrl = new URL(getEnvironment() + path);
  if(newUrl.searchParams.has(param))
    newUrl.searchParams.delete(param)
  else
    console.error('URL does not contain a "' + param + '" parameter' );

  return newUrl.pathname + newUrl.search;
}

export const createPostUrl = (id: string) => {
  return `/post?id=${id}`;
};

/**
 * Scrolls to a target elementID
 * Only usable on client side components
 */
export const scrollToElement = (elementID: string) => {
  const elem = document.getElementById(elementID);
  if (elem) {
    elem.scrollIntoView({ behavior: "smooth" });
    return;
  }
  console.error('Cannot find element id: ' + elementID);
}

export const displayTimeAsString = (dateTime: Date) =>{
  let time = "";

  if (dateTime.getHours() > 12)
    time = (dateTime.getHours() - 12).toLocaleString('en-US', {minimumIntegerDigits: 2}) + ":" + dateTime.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2}) + " PM"; 
  else
    time = dateTime.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2}) + ":" + dateTime.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2}) + " AM"; 

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
    return i.toLocaleString('en-US', {minimumIntegerDigits: 2}) + "th";
  }

  return (months[dateTime.getMonth()] + " " + getOrdinalSuffix(dateTime.getDate()) + " " + dateTime.getFullYear());
}

export const getTimezone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export const getRandomString = (length: number) => {
  const chars ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let str = '';
  const charLength = chars.length;
  for ( let i = 0; i < length; i++ ) {
    str += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return str;
}

// INSERT INTO Post(id, title, thumbnail, summary, content, updatedAt) VALUES (7, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula e", "https://i.imgur.com/sDBLZmY.png", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.", CURRENT_TIMESTAMP(3));