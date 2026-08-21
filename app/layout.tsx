import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gakuran Archive",
  description: "Independent, source-aware guides for the Roblox experience Gakuran.",
  keywords: ["gakuran wiki", "gakuran guide", "gakuran fighting styles", "gakuran controls"],
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
