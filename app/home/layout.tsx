import { SessionProvider } from "next-auth/react";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <NavBar />
          <Menu />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
