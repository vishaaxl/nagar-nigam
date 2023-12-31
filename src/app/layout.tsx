"use client";

import Navigation from "@/components/common/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/common/Footer";
import ChatbotWrapper from "@/components/chatbot/ChatbotWrapper";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "House Tax Calculator",
//   description: "House Tax Calculator | Virtue Analytics",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>House Tax Calculator</title>
        <meta
          name="description"
          content="House Tax Calculator by Virtue Analytics"
        />
      </head>
      <body className={`${inter.className} bg-slate-200 text-sm`}>
        <Navigation />
        {children}
        <Footer />
        <ChatbotWrapper />
      </body>
    </html>
  );
}
