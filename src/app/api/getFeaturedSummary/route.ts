import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const [featured] = await prisma.post.findMany({
      take: 1,
      select: {
        id: true,
        title: true,
        thumbnail: true,
        summary: true,
        content: false,
        createdAt: true,
        updatedAt: true,
        PostTag: {
          select: {
            Tag: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      }
    });

    return NextResponse.json(featured, {status: 200});
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Something went wrong!" }, {status: 500});
  }
}