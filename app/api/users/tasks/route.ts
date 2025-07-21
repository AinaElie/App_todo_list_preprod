import { prisma } from "@/lib/prisma";
import { Task } from "@prisma/client";
import { randomUUID } from "crypto";
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
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      }),
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("withId");

    if (!query) {
      return NextResponse.json(
        { message: "User ID not found" },
        { status: 404 }
      );
    }

    const body: Task[] = await request.json();

    if (!body) {
      return NextResponse.json({ message: "Not task added" }, { status: 404 });
    }

    const createdTask = [];

    for (const task of body) {
      const idTask = "TSK" + randomUUID().split("-")[0].padStart(4, "0");

      const savedTask = await prisma.task.create({
        data: {
          id: idTask,
          content: task.content,
          type: task.type,
          date_create: task.date_create,
          userId: query,
        },
      });

      createdTask.push(savedTask);
    }

    return NextResponse.json(
      { message: "Tasks created successfully", tasks: createdTask },
      { status: 201 }
    );
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
