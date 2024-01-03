import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {
    const payload: any = await req.json();
    const userId = payload.userId as string;
    const tagName = payload.tagName as string;
    const tagId = Number(payload.tagId);

    // return NextResponse.json(payload)

    if(!userId || !tagName || !tagId)
      return NextResponse.json({message: "Error!"}, {status: 401});

    if(tagName.length > 25)
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
      where: { id: userId}
    });

    if(!submitter)
      return NextResponse.json({message: "Error!"}, {status: 401});
    else if(!submitter.isAdmin)
      return NextResponse.json({message: "Error!"}, {status: 401});

    await prisma.tag.update({
      where: {
        id: tagId,
      },
      data: {
        name: tagName,
      }
    });
    
    return NextResponse.json({}, {status: 200});
  } catch(error) {
      return NextResponse.json({message: "Error!"}, {status: 500});
  }
}