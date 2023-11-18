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
      <header className="h-screen bg-neutral-900 flex flex-col">

        <div className="w-full flex flex-row justify-between h-14 items-center px-4">
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
          <div key={featuredPost.id} className="w-full flex flex-col grow overflow-hidden">
            <div className="h-full z-0 stylizedRightPolygon">
              <div className="h-full animate-cameraMoves">
                <img src={featuredPost.thumbnail} className="object-cover h-full z-0 translate-x-1/4 blur-sm hover:blur-none ease-in-out duration-300 scale-105 hover:scale-110 "></img>
              </div>
            </div>
            <div className="absolute flex flex-col h-full w-full md:w-1/2 justify-center pl-8 -mt-16">
              <h2 className="text-5xl mb-4"><span className="text-6xl">M</span>Y NAME'S <span className="text-teal-400 font-semibold text-6xl">ELIF_ </span><span className="font-semibold text-6xl">!</span><br></br><span className="text-6xl">W</span>ELCOME TO MY <span className="font-semibold text-6xl">PLAYGROUND!</span></h2>
              <h3 className="text-4xl mb-8">Would you like to read my about latest work?</h3>
              <div className="ml-4">
                <p className="text-3xl">{featuredPost.title}</p>
                <p className="text-lg text-neutral-400">{featuredPost.createdAt.toLocaleTimeString()} {featuredPost.createdAt.toLocaleDateString()}</p>
                <p className="text-2xl">{featuredPost.content}</p>
              </div>
            </div>
          </div>
        ))}

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
        Footer
      </footer>
    </>
  )
}
