import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Download FilmStash — Your Personal Movie Watchlist",
  description: "Download the APK to explore, save, and watch your favorite movies anytime. Build your ultimate movie library today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${rubik.className} antialiased`}>{children}</body>
    </html>
  );
}
