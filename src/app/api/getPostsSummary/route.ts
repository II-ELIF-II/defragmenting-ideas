import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {

  const {searchParams} = new URL(req.url);
  const page = Number(searchParams.get("page"));
  const query = String(searchParams.get("query"));
  const tagId = Number(searchParams.get("tag"));

  const POST_PER_PAGE = 4;

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
          updatedAt: true,
          PostTag: { select: { Tag: { select: { id: true, name: true, }, }, }, },
        },
        orderBy: {
          createdAt: 'desc',
        },
        where: {
          title: query ? { contains: query } : undefined,
          PostTag: tagId != 0 ? { some: { tagId: tagId } } : undefined
        }
      }),
      prisma.post.count({
        where: {
          title: query ? { contains: query } : undefined,
          PostTag: tagId != 0 ? { some: { tagId: tagId } } : undefined
        }
      }),
    ]);

    const pages = Math.ceil(count / 4);

    return NextResponse.json({pages, posts}, {status: 200});
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Something went wrong!" }, {status: 500});
  }
}