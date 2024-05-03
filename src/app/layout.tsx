import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} max-w-mainWidth mx-auto overflow-x-hidden` }>
        <Navbar />
        <main className="max-w-mainWidth text-neutural-white mx-auto overflow-x-hidden min-h-[200vh]">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
