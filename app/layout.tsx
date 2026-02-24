import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "ProgreX - Technology Solutions That Drive Success",
  description: "Transform your business with intelligent solutions. Cutting-edge technology designed to drive measurable success.",
  keywords: ["technology", "software", "AI", "cloud", "web development", "mobile apps", "digital transformation"],
  authors: [{ name: "ProgreX" }],
  openGraph: {
    title: "ProgreX - Technology Solutions That Drive Success",
    description: "Transform your business with intelligent solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
