import type { Metadata } from "next";
import { Josefin_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NOVA Yapı | Premium İnşaat & Mimari",
  description: "Hayallerinizi gerçeğe dönüştüren premium inşaat ve mimari çözümler. 20+ yıllık deneyim, modern tasarım, dayanıklı yapılar.",
  keywords: "inşaat, mimari, villa, yapı, premium, modern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${josefinSans.variable} ${dmSans.variable} font-body antialiased`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
