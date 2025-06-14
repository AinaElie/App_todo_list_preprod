"use client";

import Image from "next/image";
import { useState } from "react";
import Loading from "./loading";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className=" border border-black rounded-xl cursor-pointer shadow-perso hover:scale-110 transition-transform"
        />
        <p className="text-lg text-stone-600 text-center py-4">
          Here is a{" "}
          <span className="text-2xl font-bold text-black">Todo List</span>{" "}
          application that allows you to organize your tasks, optimize your time
          and increase your productivity.
        </p>
        <div className="py-4">
          {loading ? (
            <Loading />
          ) : (
            <Link
              onClick={() => setLoading(true)}
              href={"/login"}
              className="bg-black transition-all text-white font-light text-sm px-4 py-2 border border-black rounded-md hover:bg-transparent hover:text-black"
            >
              Connexion
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
