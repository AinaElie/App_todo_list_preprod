"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="w-11/12 ml-12 flex justify-between items-center top-2 border border-black fixed shadow-xl shadow-stone-600 py-2 rounded-lg">
      <div className="flex justify-center items-center pl-4">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <p className="text-2xl font-bold text-black">Todo List</p>
      </div>
      <div className="flex justify-center items-center pr-8 cursor-pointer">
        <div className="border border-black rounded-full overflow-hidden">
          {session?.user?.image ? (
            <div className="w-14 h-14 flex justify-center items-center">
              <Image
                src={session.user.image}
                alt="Image user"
                width={50}
                height={50}
                className="border-2 border-black rounded-full"
              />
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="10" r="3"></circle>
              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
            </svg>
          )}
        </div>
        <div className="flex flex-col text-sm text-left pl-4">
          <p className="font-bold italic">{session?.user?.name}</p>
          <p className="italic">{session?.user?.email}</p>
          <p className="italic">{session?.user?.id}</p>
        </div>
      </div>
    </nav>
  );
}
