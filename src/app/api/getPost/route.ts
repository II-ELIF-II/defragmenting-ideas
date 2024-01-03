import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    const {searchParams} = new URL(req.url);
    const id = String(searchParams.get("id"));

    const [post, tags] = await prisma.$transaction([
      prisma.post.findUnique({
        where: {
          id: id,
        }
      }),
      prisma.tag.findMany({
        take: 3,
        where: {
          PostTag: {
            some: {
              postId: id
            }
          }
        }
      })
    ]);

    return NextResponse.json({post, tags}, {status: 200});
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Something went wrong!" }, {status: 500});
  }
}