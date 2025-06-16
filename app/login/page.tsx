"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Loading from "./loading";

export default function Page() {
  const [isLoading, setLoading] = useState(false);

  const OnClickAuth = async () => {
    setLoading(true);
    await signIn("github", { redirectTo: "/home" });
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="box-root w-full h-svh flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl pb-4">Please, connected us !!!</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <button
            onClick={() => OnClickAuth()}
            className="group bg-black text-white font-light text-sm px-4 py-3 border border-black rounded-md w-60 flex justify-center items-center cursor-pointer hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="stroke-white group-hover:stroke-black"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span className="pl-4 group-hover:text-black">with GitHub</span>
          </button>
        )}
      </div>
    </div>
  );
}
