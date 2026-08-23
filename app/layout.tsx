import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./game.css";
import "./scene.css";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteUrl = rawSiteUrl.replace(/\/$/, "");
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Gakuran Archive", template: "%s | Gakuran Archive" },
  description: "Independent, source-aware guides for the Roblox experience Gakuran.",
  keywords: ["gakuran wiki", "gakuran guide", "gakuran fighting styles", "gakuran controls"],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}{gaId && <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}</Script>
  </>}</body></html>;
}
