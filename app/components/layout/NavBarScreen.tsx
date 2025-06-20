"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function NavBarScreen({
  isConnected,
  data,
}: {
  isConnected: boolean;
  data: Session | null;
}) {
  return (
    <nav className="w-11/12 z-10 ml-14 flex justify-between items-center top-2 fixed shadow-lg shadow-stone-400 py-2 rounded-lg">
      <div className="flex justify-center items-center pl-4">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <p className="text-2xl font-bold text-black">Todo App</p>
      </div>
      <div className="flex justify-center items-start pr-8">
        <div className="border border-black rounded-full flex justify-center items-center cursor-pointer">
          <div className="w-14 h-14 flex justify-center items-center">
            {(data?.user?.image && (
              <Image
                src={data?.user?.image}
                alt="Image user"
                width={50}
                height={50}
                className="border-2 border-black rounded-full"
              />
            )) || (
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
        </div>
        <div className="flex flex-col justify-center items-start pl-8">
          <p className="text-sm text-left">
            Hi,{" "}
            <span className="font-bold text-lg">
              {data?.user?.name || "..."}
            </span>
          </p>

          {isConnected ? (
            <div className="flex justify-center items-center border border-green-500 rounded-lg py-0.5 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="stroke-green-500"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <p className="text-sm text-green-500 pl-2">Connected</p>
            </div>
          ) : (
            <div className="flex justify-center items-center border border-red-700 rounded-lg py-0.5 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="stroke-red-700"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m15 9-6 6"></path>
                <path d="m9 9 6 6"></path>
              </svg>
              <p className="text-sm text-red-700 pl-2">Disconnected</p>
            </div>
          )}
        </div>
        <button
          onClick={() => signOut()}
          className="cursor-pointer border transition-all bg-red-700 border-red-700 mt-3 relative group w-10 flex justify-center items-center ml-8 p-2 rounded-lg hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="stroke-white group-hover:stroke-red-700"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" x2="9" y1="12" y2="12"></line>
          </svg>
          <div className="absolute transition-all top-5 flex-col justify-around items-center hidden mt-6 group-hover:flex">
            <div className="w-4 h-4 -mb-2 rotate-45 bg-white"></div>
            <p className="z-10 w-20 py-2 text-xs bg-white shadow-lg border rounded-lg">
              Log Out
            </p>
          </div>
        </button>
      </div>
    </nav>
  );
}
