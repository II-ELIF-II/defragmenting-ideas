import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {

    const tags = await prisma.tag.findMany();
    return NextResponse.json(tags, {status: 200});

  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Something went wrong!" }, {status: 500});
  }
}