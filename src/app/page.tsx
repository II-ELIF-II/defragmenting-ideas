import { prisma } from '@/app/db'
import { cookies } from 'next/headers'



import { GenerateRandomInt } from '@/app/utilities'

import { ArticleCardItem } from '@/components/ArticleCardItem'
import { FeaturedItem } from '@/components/FeaturedItem'
import { HeaderItem } from '@/components/HeaderItem'
import { ArticleViewerItem } from '@/components/ArticleViewerItem'
import { ArticleSearchItem } from '@/components/ArticleSearchItem'
import { DigitalResumeItem } from '@/components/DigitalResumeItem'
import { FooterItem } from '@/components/FooterItem'

async function getPostsPage(p: number)
{
  return prisma.post.findMany({
    skip: 4*p,
    take: 4,
  })
}

function getPostsSearch(p: number, key: string, tags: string)
{
  return prisma.post.findMany({
    skip: 4*p,
    take: 4,
  })
}

export default async function Home() {
  let posts = await getPostsPage(0)

  //const cookieStore = cookies()
  const featuredArticle = posts[posts.length-1]

  return (
    <>
      {<ArticleViewerItem {...featuredArticle}/>}

      {<HeaderItem bgURL={posts[GenerateRandomInt(posts.length)].thumbnail} featured={featuredArticle}/>}

      <div className="relative min-h-screen h-fit flex flex-col bg-gradient-to-tl from-neutral-900 to-neutral-800 snap-start" id="section2">

        <div className="sticky top-0 w-full flex flex-row justify-between h-14 items-center z-10 bg-neutral-950/40 z-20 backdrop-blur-sm border-b-2 border-teal-400">
          <h1 className="pl-4 pr-4 animate-slideInLeft uppercase"><span className="text-teal-400 font-semibold">&#47;&#47; </span>Feel free to <span className="text-teal-400 font-semibold">browse</span> my other works!</h1>
          <button className="ml-auto mr-4 text-md p-2 bg-teal-600 transition-all hover:bg-teal-400 active:bg-teal-700 flex items-center justify-center rounded">Search
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          <div className="absolute bg-cross w-full h-full pointer-events-none z-0"></div>
        </div>

        {/* {<ArticleSearchItem/>} */}
          
        <div className="-mt-14 top-0 min-h-full flex grow flex-col-reverse lg:flex-row-reverse z-10">
          {posts.map(posts => (<ArticleCardItem key={posts.id} {...posts}/>))}
        </div>
        <div className="absolute bg-grid w-full h-full pointer-events-none z-0"></div>
        <div className="absolute bg-topography w-full h-full pointer-events-none z-0"></div>
        <div className="absolute bg-cross w-full h-full pointer-events-none z-0"></div>
        <div className="absolute bg-gradient-to-tl from-neutral-900 via-transparent to-neutral-800 w-full h-full pointer-events-none z-0"></div>
      </div>

      <FooterItem bgURL={posts[GenerateRandomInt(posts.length)].thumbnail}/>
    </>
  )
}
