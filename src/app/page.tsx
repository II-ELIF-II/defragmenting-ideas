import { prisma } from '@/app/db'
import { ArticleCardItem } from '@/components/ArticleCardItem'
import { FeaturedItem } from '@/components/FeaturedItem'
import { HeaderItem } from '@/components/HeaderItem'

function getPosts()
{
  return prisma.post.findMany()
}

export default async function Home() {
  let posts = await getPosts()

  const featuredPost = posts[posts.length-1]

  let bgImage = [posts[0].thumbnail, posts[0].thumbnail, posts[0].thumbnail]

  return (
    <>
      <header className="h-screen flex flex-col bg-gradient-to-br from-neutral-900 to-teal-950 overflow-hidden" id="section1">
        {<HeaderItem/>}
        {<FeaturedItem id={featuredPost.id} title={featuredPost.title} thumbnail={featuredPost.thumbnail} summary={featuredPost.summary} createdAt={featuredPost.createdAt} updatedAt={featuredPost.updatedAt}/>}
        <div className="absolute bg-grid w-full h-full pointer-events-none z-0"></div>
        <img src={bgImage[0]} className="absolute w-full h-full pointer-events-none opacity-5 object-cover z-0"></img>
        <div className="absolute bg-gradient-to-br from-neutral-900 via-transparent to-teal-transparent w-full h-full pointer-events-none z-0"></div>
      </header>

      <div className="min-h-screen flex flex-col bg-gradient-to-tl from-neutral-900 to-neutral-800" id="section2">

        <div className="w-full flex flex-row justify-between h-14 items-center z-10">
          <h1 className="pl-8 uppercase">Feel free to <span className="text-teal-400 font-semibold">browse</span> my other works!</h1>
          {/* <div className="pr-8 pl-4 justify-between bg-transparent-neutral-950-1 h-14 items-center flex flex-col">
            <p>Looking for something specific?</p>
            <div>searchbarhere</div>
          </div> */}
        </div>

        <div className="glex grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-6 px-4 mb-3 md:px-8 py-2 z-10">
          {posts.map(posts => (<ArticleCardItem key={posts.id} {...posts}/>))}
          {posts.map(posts => (<ArticleCardItem key={posts.id} {...posts}/>))}
          {posts.map(posts => (<ArticleCardItem key={posts.id} {...posts}/>))}
          {posts.map(posts => (<ArticleCardItem key={posts.id} {...posts}/>))}
          {posts.map(posts => (<ArticleCardItem key={posts.id} {...posts}/>))}
          {posts.map(posts => (<ArticleCardItem key={posts.id} {...posts}/>))}
        </div>

        <div className="w-full flex flex-row h-14 items-center justify-center z-10">
          <button className="text-md px-3 h-14 w-14 bg-teal-600 transition-all hover:bg-teal-400 active:bg-teal-700">&lt;</button>
          <button className="text-md px-3 h-14 w-14 bg-teal-700 transition-all hover:bg-teal-400 active:bg-teal-700">1</button>
          <button className="text-md px-3 h-14 w-14 bg-teal-600 transition-all hover:bg-teal-400 active:bg-teal-700">2</button>
          <button className="text-md px-3 h-14 w-14 bg-teal-600 transition-all hover:bg-teal-400 active:bg-teal-700">3</button>
          <button className="text-md px-3 h-14 w-14 bg-teal-600 transition-all hover:bg-teal-400 active:bg-teal-700">&gt;</button>
        </div>

        {/* <div>
          <a href="#" className="flex flex-col items-center border border-neutral-200 rounded-lg shadow md:flex-row w-64 md:max-w-md overflow-hidden">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt=""></img>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </a>
        </div> */}

        <div className="absolute bg-grid w-full h-full pointer-events-none z-0"></div>
        <img src={bgImage[1]} className="absolute w-full h-full pointer-events-none opacity-5 object-cover z-0"></img>
        <div className="absolute bg-gradient-to-br from-transparent to-neutral-900 w-full h-full pointer-events-none z-0"></div>
      </div>

      <footer className="h-screen flex flex-col bg-gradient-to-b from-neutral-900 to-teal-950" id="section3">
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
        <img src={bgImage[2]} className="absolute w-full h-full pointer-events-none opacity-5 object-cover z-0"></img>
        <div className="absolute bg-gradient-to-b from-neutral-900 to-transparent w-full h-full pointer-events-none z-0"></div>
      </footer>
    </>
  )
}
