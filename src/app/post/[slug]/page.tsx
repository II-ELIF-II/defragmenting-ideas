import HeaderComp from "@/components/HeaderComps/HeaderBarComp"
import BackgroundComp from "@/components/MiscComps/BackgroundComp"

const Post = async() => {
  
  return (
    <>
      <div className="flex w-screen min-h-screen">
        <HeaderComp/>
        <BackgroundComp bgURL = {"https://i.imgur.com/yMPmdyO.jpg"}/>
      </div>
    </>
  )
}

export default Post
