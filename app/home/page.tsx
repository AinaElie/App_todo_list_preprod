"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const session = useSession();
  const router = useRouter();

  if (session.status != "authenticated") return router.push("/login")

  return (
    <div className="w-full h-screen flex justify-center items-center">
      TODO: App TodoList
    </div>
  );
}
