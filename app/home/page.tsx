"use client";

import { auth } from "@/auth";
import NotFound from "./not-found";

export default async function Page() {
  const session = await auth();

  if (!session?.user) return <NotFound />

  return (
    <div className="w-full h-screen flex justify-center items-center">
      TODO: App TodoList
    </div>
  );
}
