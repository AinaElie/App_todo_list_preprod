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
            <div className="flex justify-center items-center">
              <Link
                onClick={() => setLoading(true)}
                href={"/login"}
                className="bg-black group flex justify-center items-center transition-all text-white font-light text-sm mr-4 px-4 py-3 border border-black rounded-md hover:bg-white"
              >
                <p className="group-hover:text-black">Connexion</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="stroke-white ml-4 group-hover:stroke-black"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" x2="3" y1="12" y2="12"></line>
                </svg>
              </Link>
              <Link
                onClick={() => setLoading(true)}
                href={"/home"}
                className="bg-black group flex justify-center items-center transition-all text-white font-light text-sm ml-4 px-4 py-3 border border-black rounded-md hover:bg-transparent"
              >
                <p className="group-hover:text-black">Discovery</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="stroke-white ml-4 group-hover:stroke-black"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
