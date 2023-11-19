import { prisma } from '@/app/db'

function getPosts()
{
  return prisma.post.findMany()
}

export default async function Home() {

  const postCount = await prisma.post.count()
  console.log(postCount)

  const featuredPost = await prisma.post.findMany({
    orderBy: {
      id: 'desc'
    },
    take: 1,
  })

  return (
    <>
      <header className="h-screen flex flex-col bg-gradient-to-br from-neutral-900 to-teal-950">

        <div className="w-full flex flex-row justify-between h-14 items-center px-4 z-10">
          <div className="flex flex-row text-lg space-x-4">
            <div className="h-6 w-6 grid grid-cols-2 gap-1 animate-logo">
              <div className="h-full w-full bg-teal-400"></div>
              <div className="h-full w-full bg-teal-400 animate-logoPulse"></div>
              <div className="h-full w-full bg-teal-400"></div>
              <div className="h-full w-full bg-teal-400"></div>
            </div>
            <h1 className="font-semibold items-center"><span className="text-teal-400">ELIFS </span>PLAYGROUND</h1>
          </div>
          <div className="flex flex-row space-x-4">
            <a href="#">Github</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        {featuredPost.map(featuredPost => (
          <div key={featuredPost.id} className="group w-full flex flex-col grow overflow-hidden pointer-events-none z-10">
            <div className="h-full z-0 stylizedRightPolygon overflow-hidden pointer-events-auto">
              <div className="h-full animate-cameraMoves overflow-hidden">
                <img src={featuredPost.thumbnail} className="object-cover h-full translate-x-1/4 blur-sm group-hover:blur-none ease-in-out duration-500 scale-105 group-hover:scale-110" alt="temp"></img>
              </div>
            </div>
            <div className="absolute flex flex-col h-full w-full md:w-1/2 justify-center pl-8 -mt-8">
              <h2 className="text-5xl mb-16 first-letter:text-6xl">MY NAME&apos;S <span className="text-teal-400 font-semibold text-6xl">ELIF_ </span><span className="font-semibold text-6xl">!</span><br></br>WELCOME TO MY <span className="font-semibold text-6xl">PLAYGROUND!</span></h2>
              <h3 className="text-4xl mb-4">
                Check out my latest article:
              </h3>
              
              <div className="flex flex-col ml-5 outline-1 outline-offset-4 outline-dashed outline-neutral-50 bgTransparent -mr-12 pointer-events-auto transition-all group-hover:bgTransparentLight ease-in-out duration-600">
                <h1 className="text-2xl px-3 py-2 bgTransparent">{featuredPost.title}</h1>
                <p className="text-xs text-neutral-400 px-3 mt-1">{featuredPost.createdAt.toLocaleTimeString()} {featuredPost.createdAt.toLocaleDateString()}</p>
                <p className="text-xl mb-1 px-3 text-justify">{featuredPost.summary}</p>
                <button className="ml-auto mr-0 text-md px-3 py-2 text-right bg-teal-600 transition-all hover:px-6 hover:bg-teal-400 active:bg-teal-700">Read more &gt;</button>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute gridbg w-full h-full pointer-events-none z-0"></div>
      </header>
      <div className="flex flex-col flex-grow min-h-screen">
          <h1>Feed</h1>
          <div>
            <a href="#" className="flex flex-col items-center border border-neutral-200 rounded-lg shadow md:flex-row w-64 md:max-w-md overflow-hidden">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt=""></img>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
            </a>
        </div>
      </div>
      <footer className="bg-neutral-800 h-40 border-t-2 border-teal-500">
        Built using NextJS, ReactJS, Tailwind, Typescript, and Prisma.
        Hosted on Netlify, and PlanetScale.
      </footer>
    </>
  )
}
