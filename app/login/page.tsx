"use client";

import { Github } from "@deemlol/next-icons";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Loading from "./loading";

export default function Page() {
  const [isLoading, setLoading] = useState(false);

  const OnClickAuth = async () => {
    setLoading(true);
    await signIn("github", { redirectTo: "/home" });
  };

  return (
    <div className="box-root w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl pb-4">Connexion with</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <button
            onClick={() => OnClickAuth()}
            className="peer bg-black text-white font-light text-sm px-4 py-3 border border-black rounded-md w-60 flex justify-center items-center cursor-pointer"
          >
            <Github
              className="peer-has-hover:text-black"
              size={24}
              color="#FFFFFF"
            />
            <span className="pl-4">GitHub</span>
          </button>
        )}
      </div>
    </div>
  );
}
