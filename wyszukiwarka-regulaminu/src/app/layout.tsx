import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

// Te same dwie rodziny co w aplikacji produkcyjnej. Zmienne CSS muszą się
// nazywać tak, jak oczekuje globals.css (--font-cinzel, --font-inter).
const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin-ext"], weight: ["400", "600"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Wyszukiwarka regulaminu PZSPZ",
  description:
    "Regulamin sportowy wyścigów psich zaprzęgów rozłożony na punkty, z wyszukiwarką po treści. Moduł z systemu SKYLOS Twisted Trails.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${cinzel.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
