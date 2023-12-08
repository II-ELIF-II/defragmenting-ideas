import { redirect } from "next/navigation"

const Post = async() => {

  redirect('/#PostList');

  // return (
  //   <>
  //     <div className="flex w-screen min-h-screen">
  //       404 Post Not Found
  //       <BackgroundComp bgURL = {"https://i.imgur.com/yMPmdyO.jpg"}/>
  //     </div>
  //   </>
  // )
}

export default Post
