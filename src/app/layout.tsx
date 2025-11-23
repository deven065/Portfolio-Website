import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import CustomCursor from "./Components/CustomCursor";
import PageTransition from "./Components/PageTransition";
import LoadingScreen from "./Components/LoadingScreen";
import ParticleBackground from "./Components/ParticleBackground";
import MorphingShapes from "./Components/MorphingShapes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev.Folio",
  description: "Full Stack / Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LoadingScreen />
          <ParticleBackground />
          <MorphingShapes />
          <CustomCursor />
          <Header /> {/* Always on top */}
          <PageTransition>
            <main className="pt-12 bg-white dark:bg-black transition-colors duration-300 relative z-10">{children}</main>
          </PageTransition>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
