import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { MainHeader } from "./components/layout/main-header";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Portfolio | Creative Developer",
  description:
    "A highly interactive, aesthetically pleasing portfolio showcasing creative development work, dynamic animations, and premium web design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-neutral-50 overflow-x-hidden">
        <MainHeader />
        <main className="flex-1 flex flex-col pt-14">{children}</main>
      </body>
    </html>
  );
}
