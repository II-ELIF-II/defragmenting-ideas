import { prisma } from "@/app/db";
import { NextResponse } from "next/server";
import updateTagsPayload from "@/types/payload/updateTagsPayload";

export async function POST(req: Request) {

  try {
    const payload: updateTagsPayload = await req.json();

    // return NextResponse.json(payload)

    if(!payload.userId || !payload.tagName || !payload.tagId)
      return NextResponse.json({message: "Error!"}, {status: 401});

    if(payload.tagName.length > 25)
      return NextResponse.json({message: "Error too long!"}, {status: 400});

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

    await prisma.tag.update({
      where: {
        id: payload.tagId,
      },
      data: {
        name: payload.tagName,
      }
    });
    
    return NextResponse.json({}, {status: 200});
  } catch(error) {
      return NextResponse.json({message: "Error!"}, {status: 500});
  }
}