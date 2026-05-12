import type { Metadata } from "next";
import { Geist, Geist_Mono,Pixelify_Sans, Host_Grotesk } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-pixelify', // This creates a CSS variable
});

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  variable: '--font-host',
});

const hiragino = localFont({
  src: '../public/fonts/Hiragino-Kaku-Gothic-Std-W8.otf', // Path to your file
  variable: '--font-hira', // The CSS variable name
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Project",
  description: "WiCS Dev Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixelify.variable} ${hostGrotesk.variable} ${hiragino.variable} antialiased bg-[#F8E0D8]`}
      >
        {children}
      </body>
    </html>
  );
}


// ${hiragino.variable} 