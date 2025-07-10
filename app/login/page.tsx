"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Loading from "./loading";

export default function Page() {
  const [isLoading, setLoading] = useState(false);

  const OnClickAuthGitHub = async () => {
    setLoading(true);
    await signIn("github", { redirectTo: "/home" });
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const OnClickAuthGoogle = async () => {
    setLoading(true);
    await signIn("google", { redirectTo: "/home" });
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="box-root w-full h-svh flex justify-center items-center">
      <div className="flex flex-col justify-center items-center py-8 px-10 border border-black/5 shadow-lg rounded-md shadow-black/50">
        <br />
        <h1 className="text-2xl pb-8">Please, connected us !!!</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => OnClickAuthGitHub()}
              className="group bg-black text-white font-light text-sm px-4 py-3 border border-black rounded-md w-60 flex justify-center items-center cursor-pointer hover:bg-white"
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
                className="stroke-white group-hover:stroke-black"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span className="pl-4 group-hover:text-black">with GitHub</span>
            </button>
            <div className="flex justify-between items-center w-full py-2">
              <div className="w-full h-1 bg-stone-400 rounded-2xl"></div>
              <p className="px-4">Or</p>
              <div className="w-full h-1 bg-stone-400 rounded-2xl"></div>
            </div>
            <button
              onClick={() => OnClickAuthGoogle()}
              className="font-light text-sm px-4 py-3 border border-black rounded-md w-60 flex justify-center items-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 30 30"
                className="stroke-black"
              >
                <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
              </svg>
              <span className="pl-4">with Google</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
