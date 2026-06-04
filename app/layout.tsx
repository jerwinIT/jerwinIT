import type { Metadata } from "next";
import { Orbitron, Outfit } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-heading",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jerwin Louise Peria - BS ITSM Student",
  description:
    "Personal profile and portfolio of Jerwin Louise Peria, a passionate BS ITSM student",
  icons: {
    icon: "/jerwin-icon.png",
    apple: "/jerwin-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
