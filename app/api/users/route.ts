import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return new NextResponse(JSON.stringify(users));
    }   catch (error) {
        return new NextResponse(JSON.stringify({ error: error}),
            { status: 500 }
        )
    }
}