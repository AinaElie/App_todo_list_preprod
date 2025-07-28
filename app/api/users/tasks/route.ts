import { prisma } from "@/lib/prisma";
import { Task } from "@prisma/client";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const tasks = await prisma.task.findMany();

    if (!tasks) {
      return NextResponse.json(
        { message: "To tasks at the moment" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: tasks }, { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      }),
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const email = cookieStore.get("emailUser");

    const user = await prisma.user.findUnique({
      where: {
        email: email?.value,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found, please connected us" }, { status: 404 });
    }

    const body: Task[] = await request.json();

    if (body.length == 0) {
      return NextResponse.json({ message: "Not task added" }, { status: 404 });
    }

    const createdTask = [];

    for (const task of body) {
      const idTask = "TSK" + randomUUID().split("-")[0].padStart(4, "0");

      createdTask.push({
        id: idTask,
        content: task.content,
        type: task.type,
        date_create: task.date_create,
        userId: user.id,
      });
    }

    await prisma.task.createMany({
      data: createdTask,
    });

    return NextResponse.json(
      { message: "Tasks created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      }),
      { status: 500 }
    );
  }
}
