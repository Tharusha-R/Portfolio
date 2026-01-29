import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import { Toaster } from "react-hot-toast";

const font= Inter({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets : ['latin'],
});

export const metadata: Metadata = {
  title: "Tharusha Rukshan",
  description: "Portfolio built with Next.js 15",
  icons: {
    icon: "/images/favicon-v2.ico", 
    shortcut: "/images/favicon-v2.ico", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}>
        <ResponsiveNav/>  
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              zIndex: 100100,
              marginTop: '5rem', // move below navbar (if navbar height ~12vh)
            },
          }}
        />
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
