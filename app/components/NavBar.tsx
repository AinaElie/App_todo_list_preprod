"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { User } from "@deemlol/next-icons";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="w-full flex justify-between items-center fixed shadow-md shadow-stone-600 py-2">
      <div className="flex justify-center items-center pl-4">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <p className="text-2xl font-bold text-black">Todo List</p>
      </div>
      <div className="flex justify-center items-center pr-8">
        <div className="border border-black rounded-full overflow-hidden">
          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt="Image user"
              width={50}
              height={50}
            />
          ) : (
            <User size={24} color="#000000" />
          )}
        </div>
        <div className="flex flex-col text-left pl-4">
          <p className="font-bold text-xl">{session?.user?.name}</p>
          <p className="italic">{session?.user?.email}</p>
        </div>
      </div>
    </nav>
  );
}
