import { prisma } from "@/app/db";
import createTagsPayload from "@/types/payload/createTagPayload";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {
    const payload: createTagsPayload = await req.json();

    // return NextResponse.json(payload.userId)

    if(!payload.userId || !payload.tagName)
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

    const newTag = await prisma.tag.create({
      data: {
        name: payload.tagName
      }
    });
    
    return NextResponse.json({newTag}, {status: 200});

  } catch(error) {
      return NextResponse.json({message: "Error!"}, {status: 500});
  }
}