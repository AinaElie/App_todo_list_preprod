import { SessionProvider } from "next-auth/react";
import NavBar from "../components/NavBar";

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
        </SessionProvider>
        {children}
      </body>
    </html>
  );
}
