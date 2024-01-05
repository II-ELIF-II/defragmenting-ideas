import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    const {searchParams} = new URL(req.url);
    const id = Number(searchParams.get("id"));

    const tag = await prisma.tag.findUnique({select:{ id: true, name: true, createdAt: false }, where: { id: id }});
    return NextResponse.json(tag, {status: 200});

  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Something went wrong!" }, {status: 500});
  }
}