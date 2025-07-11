import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("value");

    if (!query) {
      return NextResponse.json(
        { message: "User id not found" },
        { status: 404 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        id: query,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ data: user }, { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      }),
      { status: 500 }
    );
  }
}
