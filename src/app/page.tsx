import { prisma } from '@/app/db'

export default async function Home() {

  const postCount = await prisma.post.count()
  console.log(postCount)

  return (
    <>
      <header className="bg-neutral-800 h-12 border-b border-teal-500">
        Header
      </header>
      <div className="flex flex-col flex-grow min-h-screen">
        <div className="featured flex h-96 bg-neutral-900">
          Featured
        </div>
        <div className="main flex flex-grow">
          Feed
        </div>
      </div>
      <footer className="bg-neutral-800 h-40 border-t-2 border-teal-500">
        Footer
      </footer>
    </>
  )
}
