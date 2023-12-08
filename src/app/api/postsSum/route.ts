import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {

  const {searchParams} = new URL(req.url);
  const page = Number(searchParams.get("page"));
  const query = String(searchParams.get("query"));

  const POST_PER_PAGE = 4;

  console.log(query)

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany({
        skip: POST_PER_PAGE * (page - 1),
        take: POST_PER_PAGE,
        select: {
          id: true,
          title: true,
          thumbnail: true,
          summary: true,
          content: false,
          createdAt: true,
          updatedAt: true
        },
        orderBy: {
          createdAt: 'desc',
        },
        where: {
          title: {
            contains: query
          }
        }
      }),
      prisma.post.count({
        where: {
          title: {
            contains: query
          }
        }
      }),
    ]);

    const pages = Math.ceil(count / 4);

    return NextResponse.json({page, pages, posts}, {status: 200});
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Something went wrong!" }, {status: 500});
  }
}