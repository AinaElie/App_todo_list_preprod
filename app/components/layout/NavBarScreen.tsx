"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
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
      <div className="flex justify-center items-center pr-8">
        <div className={`rounded-full flex justify-center items-center cursor-pointer ${isConnected == true ? "bg-green-300" : "bg-red-500"} mr-8`}>
          <div className="w-14 h-14 flex justify-center items-center">
            {(data?.user?.image && (
              <>
                <Image
                  src={data?.user?.image}
                  alt="Image user"
                  width={50}
                  height={50}
                  className="rounded-full"
                  popoverTarget="profil"
                />
                <div
                  popover="manual"
                  id="profil"
                  className="open:flex open:bg-black"
                >
                  <p> {data.user.name} </p>
                  <p> {data.user.email} </p>
                </div>
              </>
            )) || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="stroke-white"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="10" r="3"></circle>
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
              </svg>
            )}
          </div>
        </div>
        <Menu as="div" className="relative ml-3">
          <div>
            <MenuButton className="relative px-1 py-1.5 rounded-lg hover:bg-stone-200 transition-all cursor-pointer">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="stroke-black"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-4 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="flex justify-start items-center px-4 py-2 text-sm mx-2 mb-2 rounded-lg data-focus:bg-stone-200 data-focus:outline-hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="mr-4"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="10" r="3"></circle>
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                </svg>
                <p>Your Profile</p>
              </a>
            </MenuItem>
            {/* <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm mx-2 rounded-lg data-focus:bg-stone-200 data-focus:outline-hidden"
              >
                Settings
              </a>
            </MenuItem> */}
            <MenuItem>
              <a
                onClick={() => signOut()}
                href="#"
                className="flex justify-start items-center px-4 py-2 text-sm mx-2 group rounded-lg data-focus:bg-transparent data-focus:outline-hidden bg-red-500 border border-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="mr-4 stroke-white group-hover:stroke-red-500"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" x2="9" y1="12" y2="12"></line>
                </svg>
                <p className="text-white group-hover:text-red-500">Sign out</p>
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </nav>
  );
}
