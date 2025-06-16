"use client";

import { useRouter } from "next/navigation";

export default function SideBar() {
  const router = useRouter();

  return (
    <div className="shadow-xl flex flex-col justify-center items-center group hover:w-1/5 hover:cursor-pointer w-14 shadow-stone-400 fixed left-8 top-40 overflow-hidden py-8 rounded-lg transition-all">
      <button
        onClick={() => router.push("/home/addTask")}
        className="flex justify-center pl-3 items-center w-11/12 h-14 hover:bg-stone-200 py-3 rounded-lg cursor-pointer relative"
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
          className="stroke-black absolute left-4"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 12h8"></path>
          <path d="M12 8v8"></path>
        </svg>
        <p className="group-hover:text-black group-hover:pl-0 text-transparent transition-all">
          Add new task
        </p>
      </button>
      <button
        onClick={() => router.push("/home/list")}
        className="flex justify-center pl-3 items-center w-11/12 h-14 hover:bg-stone-200 py-3 rounded-lg cursor-pointer relative"
      >
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
          className="stroke-black absolute left-4"
        >
          <rect x="3" y="5" width="6" height="6" rx="1"></rect>
          <path d="m3 17 2 2 4-4"></path>
          <path d="M13 6h8"></path>
          <path d="M13 12h8"></path>
          <path d="M13 18h8"></path>
        </svg>
        <p className="group-hover:text-black group-hover:pl-0 text-transparent transition-all">
          My Todo list
        </p>
      </button>
      <button
        onClick={() => router.push("/home/schedule")}
        className="flex justify-center pl-3 items-center w-11/12 h-14 hover:bg-stone-200 py-3 rounded-lg cursor-pointer relative"
      >
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
          className="stroke-black absolute left-4"
        >
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
          <path d="m9 16 2 2 4-4"></path>
        </svg>
        <p className="group-hover:text-black group-hover:pl-0 text-transparent transition-all">
          My Schedule
        </p>
      </button>
    </div>
  );
}
