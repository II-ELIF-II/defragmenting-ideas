import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    const {searchParams} = new URL(req.url);
    const postId = String(searchParams.get("postId"));

    const tags = await prisma.tag.findMany({
      take: 3,
      where: {
        PostTag: {
          some: {
            postId: postId
          }
        }
      }
    });

    return NextResponse.json(tags, {status: 200});
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Something went wrong!" }, {status: 500});
  }
}