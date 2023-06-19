import Navigation from "@/components/common/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "House Tax Calculator",
  description: "House Tax Calculator | Virtue Analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200 text-sm`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
