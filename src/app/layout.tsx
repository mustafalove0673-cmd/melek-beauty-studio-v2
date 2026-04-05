import type { Metadata } from "next";
import { Josefin_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NOVA Construction | Premium Villa Construction",
  description:
    "NOVA Construction - Premium villa construction with 25+ years of experience. Smart home integration, pool & spa design, interior design, landscape architecture and more.",
  keywords: [
    "NOVA Construction",
    "Villa Construction",
    "Premium Villa",
    "Interior Design",
    "Landscape Architecture",
    "Smart Home",
    "Pool Design",
    "Luxury Villa",
    "Istanbul Construction",
  ],
  authors: [{ name: "NOVA Construction" }],
  openGraph: {
    title: "NOVA Construction | Premium Villa Construction",
    description:
      "25+ years of excellence in premium villa construction. Smart homes, luxury interiors, and world-class craftsmanship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${josefin.variable} ${sourceSans.variable} font-body antialiased bg-dark text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
