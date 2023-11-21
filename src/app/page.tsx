import { prisma } from '@/app/db'
import { ArticleCardItem } from '@/components/ArticleCardItem'
import { FeaturedItem } from '@/components/FeaturedItem'
import { HeaderItem } from '@/components/HeaderItem'
import { GenerateRandomInt } from '@/app/utilities'

function getPosts()
{
  return prisma.post.findMany()
}

export default async function Home() {
  let posts = await getPosts()

  const featuredPost = posts[posts.length-1]
  
  const bgImage = [posts[GenerateRandomInt(posts.length-1)].thumbnail, posts[GenerateRandomInt(posts.length-1)].thumbnail]

  return (
    <>
      <header className="relative h-screen flex flex-col bg-gradient-to-br from-neutral-900 to-teal-950 overflow-hidden snap-center" id="section1">
        {<HeaderItem/>}
        {<FeaturedItem {...featuredPost}/>}
        <div className="absolute bg-grid w-full h-full pointer-events-none z-0"></div>
        <div className="absolute bg-topography w-full h-full pointer-events-none z-0"></div>
        <div className="absolute bg-cross w-full h-full pointer-events-none z-0"></div>
        <img src={bgImage[0]} className="absolute w-full h-full pointer-events-none opacity-5 object-cover z-0"></img>
        <div className="absolute bg-gradient-to-br from-neutral-900 via-transparent to-teal-950 w-full h-full pointer-events-none z-0"></div>
      </header>

      {/* {<ArticleModalItem/>} */}

      <div className="relative min-h-screen h-fit flex flex-col bg-gradient-to-tl from-neutral-900 to-neutral-800 snap-end" id="section2">

        <div className="sticky top-0 w-full flex flex-row justify-between h-14 items-center z-10 bg-neutral-950/40 z-20 backdrop-blur-sm border-b-2 border-teal-400">
          <h1 className="pl-8 uppercase"><span className="text-teal-400 font-semibold">&#47;&#47; </span>Feel free to <span className="text-teal-400 font-semibold">browse</span> my other works!</h1>
          {/* <div className="pr-8 pl-4 justify-between bg-neutral-950/40 h-14 items-center flex flex-col">
            <p>Looking for something specific?</p>
            <div>searchbarhere</div>
          </div> */}
          {/* <div className="flex grow flex-row h-14 items-center justify-center z-10">
            <button className="text-md px-3 h-14 w-14 bg-teal-600 transition-all hover:bg-teal-400 active:bg-teal-700">&lt;</button>
            <button className="text-md px-3 h-14 w-14 bg-teal-700 transition-all hover:bg-teal-400 active:bg-teal-700">1</button>
            <button className="text-md px-3 h-14 w-14 bg-teal-600 transition-all hover:bg-teal-400 active:bg-teal-700">2</button>
            <button className="text-md px-3 h-14 w-14 bg-teal-600 transition-all hover:bg-teal-400 active:bg-teal-700">3</button>
            <button className="text-md px-3 h-14 w-14 bg-teal-600 transition-all hover:bg-teal-400 active:bg-teal-700">&gt;</button>
          </div> */}
          {/* <div className="absolute bg-grid w-full h-full pointer-events-none z-0"></div> */}
          {/* <div className="absolute bg-topography w-full h-full pointer-events-none z-0"></div> */}
          <div className="absolute bg-cross w-full h-full pointer-events-none z-0"></div>
        </div>

        <div className="-mt-14 top-0 min-h-full flex grow grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 grid-flow-row z-10">
          {posts.map(posts => (<ArticleCardItem key={posts.id} {...posts}/>))}
          {posts.map(posts => (<ArticleCardItem key={posts.id} {...posts}/>))}
          {posts.map(posts => (<ArticleCardItem key={posts.id} {...posts}/>))}
          {posts.map(posts => (<ArticleCardItem key={posts.id} {...posts}/>))}
        </div>
      </div>

      <footer className="relative h-screen flex flex-col bg-gradient-to-b from-neutral-900 to-teal-950 snap-start" id="section3">
        {/* <div className="z-10">
          <div className="">
            <h1>About Me:</h1>
            <div>Test</div>
          </div>
          <div className="">
            Built using NextJS, ReactJS, Tailwind, Typescript, and Prisma.
            Hosted on Netlify, and PlanetScale.
          </div>
        </div> */}

        <div className="absolute bg-grid w-full h-full pointer-events-none z-0"></div>
        <div className="absolute bg-topography w-full h-full pointer-events-none z-0"></div>
        <div className="absolute bg-cross w-full h-full pointer-events-none z-0"></div>
        <img src={bgImage[1]} className="absolute w-full h-full pointer-events-none opacity-5 object-cover z-0"></img>
        <div className="absolute bg-gradient-to-b from-neutral-900 to-transparent w-full h-full pointer-events-none z-0"></div>
      </footer>

      <div id="articleViewer" className="fixed flex justify-center top-0 h-screen w-screen bg-neutral-950/40 backdrop-blur-md z-50 lg:pt-24 overflow-hidden invisible">

      </div>
    </>
  )
}
