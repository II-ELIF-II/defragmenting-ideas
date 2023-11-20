export const GenerateRandomInt = (max: number) => {
  return (Math.floor(Math.random() * max))
}

export const GenerateUpdateTxt = (createdDate: Date, updateDate: Date) =>
{
  let d;
  if(createdDate.toLocaleTimeString() == updateDate.toLocaleTimeString())
    return "Created on: " + createdDate.toLocaleTimeString() + createdDate.toLocaleDateString()
  else
    return "Created on: " + createdDate.toLocaleTimeString() + createdDate.toLocaleDateString() + "\nUpdated on: " + updateDate.toLocaleTimeString() + updateDate.toLocaleDateString()
}