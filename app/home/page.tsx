"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated" && session?.user?.email) {
      document.cookie = `emailUser=${encodeURIComponent(session.user.email)}; path=/`;
    }
  }, [status, session, router]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-5xl">...</h1>
    </div>
  );
}
