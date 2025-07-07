"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const session = useSession();
  const router = useRouter();

  if (session.status == "unauthenticated") return router.push("/login")

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-5xl">...</h1>
    </div>
  );
}
