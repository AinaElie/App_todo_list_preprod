"use client";

import { useState } from "react";
import SideBar from "./layout/SideBar";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);

  const OnClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      className={`shadow-xl shadow-stone-400 fixed left-8 top-40 overflow-hidden py-8 rounded-lg transition-all ${
        isOpen == true ? "w-14" : "w-1/5"
      }`}
    >
      <button
        onClick={() => OnClick()}
        className={`right-2.5 absolute top-3 transition-all cursor-pointer ${
          isOpen == true ? "rotate-180" : "rotate-0"
        }`}
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
        >
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M15 3v18"></path>
          <path d="m10 15-3-3 3-3"></path>
        </svg>
      </button>
      <SideBar isOpen={isOpen} />
    </div>
  );
}
