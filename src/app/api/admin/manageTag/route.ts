import { prisma } from "@/app/db";
import { NextResponse } from "next/server";
import manageTagPayload from "@/types/payload/manageTagPayload";

export async function POST(req: Request) {

  try {
    const payload: manageTagPayload = await req.json() as manageTagPayload;
    
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

    if(payload.tagId === 0) {
      //Create the tag
      await prisma.tag.create({
        data: {
          name: payload.tagName.toUpperCase(),
        }
      });
    } else {
      //Update the tag
      await prisma.tag.update({
        where: {
          id: payload.tagId,
        },
        data: {
          name: payload.tagName.toUpperCase(),
        }
      });
    }
    return NextResponse.json(payload, {status: 200});
  } catch(error) {
    return NextResponse.json({message: "Error!"}, {status: 500});
  }
}