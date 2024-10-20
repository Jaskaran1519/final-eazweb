import type { Metadata } from "next";
import localFont from "next/font/local";
import { Comfortaa } from 'next/font/google';
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const mainFont = Comfortaa({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Eazweb | Innovative Web Design & Content Creation Agency",
  description: "Eazweb is a cutting-edge web design and content creation agency. We craft stunning, user-friendly websites and compelling content that drives engagement and boosts your online presence. Our expert team blends creativity with technical expertise to deliver tailored digital solutions for businesses of all sizes.",
  icons: [
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "manifest", url: "/site.webmanifest" },
    {
      rel: "icon",
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='white'/%3E%3Ctext x='50' y='50' font-family='Arial, sans-serif' font-size='60' font-weight='bold' text-anchor='middle' dominant-baseline='central' fill='black'%3EE%3C/text%3E%3C/svg%3E",
      type: "image/svg+xml"
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mainFont.className} antialiased bg-[#0d0c0d] text-[#e8e8df]`}
      >
        <LoadingScreen/>
        {children}
      </body>
    </html>
  );
}
