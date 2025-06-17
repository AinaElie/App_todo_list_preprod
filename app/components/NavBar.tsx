"use client";

import { useSession } from "next-auth/react";
import NavBarScreen from "./layout/NavBarScreen";
;

export default function NavBar() {
  const { data: session } = useSession();

  if (!session?.user) return <NavBarScreen isConnected={false} data={session} />

  return <NavBarScreen isConnected={true} data={session} />
}
