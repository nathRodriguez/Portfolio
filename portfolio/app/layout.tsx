import type { Metadata } from "next";

import "./globals.css";
import "@fontsource/inter";

export const metadata: Metadata = {
  title: "Nathalia Rodriguez Portfolio",
  description: "Portfolio of Nathalia Rodriguez, Software Engineer.",
  icons: {
    icon: "/brackets.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-teal-950 text-white">
        {children}
      </body>
    </html>
  );
}
