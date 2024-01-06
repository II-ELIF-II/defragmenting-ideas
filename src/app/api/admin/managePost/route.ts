import { prisma } from "@/app/db";
import managePostPayload from "@/types/payload/managePostPayload";
import { create } from "domain";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {
    const payload: managePostPayload = await req.json() as managePostPayload;

    if(!payload.userId || !payload.title || !payload.thumbnail || !payload.summary || !payload.content)
      return NextResponse.json({message: "Error!"}, {status: 401});
    
    const submitter = await prisma.user.findFirst({
      select: {
        id: true,
        isAdmin: true,
        name: false,
        email: false,
        password: false,
        emailVerified: false,
        image: false,
        createdAt: false,
        updatedAt: false
      },
      where: { id: payload.userId}
    });
    
    if(!submitter)
      return NextResponse.json({message: "Error!"}, {status: 401});
    else if(!submitter.isAdmin)
      return NextResponse.json({message: "Error!"}, {status: 401});

    if(payload.id === '') {
      //Create the new post with its corresponding tags
      await prisma.post.create({
        data: {
          title: payload.title,
          thumbnail: payload.thumbnail,
          summary: payload.summary,
          content: payload.content,
          PostTag: {
            create: payload.PostTag.map((tag) => ({ tagId: tag.id }))
          }
        }
      });
    } else {
      //Update the post
      await prisma.$transaction([
        prisma.postTag.deleteMany({
          where: { postId: payload.id }
        }),
        prisma.post.update({
          where: { id: payload.id, },
          data: {
            title: payload.title,
            thumbnail: payload.thumbnail,
            summary: payload.summary,
            content: payload.content,
            PostTag: {
              create: payload.PostTag.map((tag) => ({ tagId: tag.id }))
            }
          }
        }),
      ])
    }
    
    return NextResponse.json(payload, {status: 200});

    // if(!submitter)
    //   return NextResponse.json({message: "Error!"}, {status: 401});
    // else if(!submitter.isAdmin)
    //   return NextResponse.json({message: "Error!"}, {status: 401});

    // const newTag = await prisma.tag.create({
    //   data: {
    //     name: payload.tagName
    //   }
    // });
    
    // return NextResponse.json({newTag}, {status: 200});

  } catch(error) {
      return NextResponse.json({message: "Error!"}, {status: 500});
  }
}