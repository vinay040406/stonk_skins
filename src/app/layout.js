import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stonk Skins",
  description: "The Ultimate CS 2 Marketplace for Gamers Who Mean Business",
  openGraph: {
    title: "Stonk Skins",
    description: "The Ultimate CS 2 Marketplace for Gamers Who Mean Business",
    images: ["/meta-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${dmSans.variable} h-full antialiased`}>
      <body className="flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
