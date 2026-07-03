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
  title: {
    default: "Naufal Labib Nugroho — Software Engineer",
    template: "%s | Naufal Labib Nugroho",
  },
  description:
    "Portfolio of Naufal Labib Nugroho — a software engineer specializing in machine learning and full-stack development. Explore creative projects, dynamic animations, and premium web experiences.",
  icons: {
    icon: "/Images/logo-porto.png",
    apple: "/Images/logo-porto.png",
  },
  openGraph: {
    title: "Naufal Labib Nugroho — Software Engineer",
    description:
      "Portfolio showcasing creative development work at the intersection of machine learning and full-stack development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naufal Labib Nugroho — Software Engineer",
    description:
      "Portfolio showcasing creative development work at the intersection of machine learning and full-stack development.",
  },
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
