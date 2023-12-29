import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    const {searchParams} = new URL(req.url);
    const id = String(searchParams.get("id"));

    const post = await prisma.post.findMany({
      take: 1,
      select: {
        id: true,
        title: true,
        thumbnail: true,
        summary: true,
        content: true,
        createdAt: true,
        updatedAt: true
      },
      where: {
        id: id,
      }
    });

    return NextResponse.json(post, {status: 200});
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Something went wrong!" }, {status: 500});
  }
}