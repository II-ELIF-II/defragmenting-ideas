import { prisma } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {

  try {
    const payload: any = await req.json()

    if(process.env.POST_KEY !== payload.password)
    {
      return NextResponse.json({message: "Error!"}, {status: 401})
    }

    //return NextResponse.json({payload})

    switch (payload.type) {
      //Post Creation
      case 0:
        const newPost = await prisma.post.create({
          data: {
            title: payload.title, 
            thumbnail: payload.thumbnail, 
            summary: payload.summary, 
            content: payload.content
          }
        })
        return NextResponse.json({newPost}, {status: 200})
        //add process for relating tags with post
      //Tag Creation
      case 1: 
        const newTag = await prisma.tag.create({
          data: {
            name: payload.name,
          }
        })
        return NextResponse.json({newTag}, {status: 200})
    }

  } catch(error) {
      return NextResponse.json({message: "Error!"}, {status: 500})
  }
}