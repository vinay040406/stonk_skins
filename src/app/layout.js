import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/common/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html
      lang="en"
      className={` ${dmSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex flex-col bg-[#220C30] h-auto w-full">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
