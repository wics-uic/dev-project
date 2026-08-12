import type { Metadata } from "next";
import { Geist, Geist_Mono,Pixelify_Sans, Host_Grotesk } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const hostGrotesk = localFont({
  src: '../public/fonts/HostGrotesk.ttf',
  variable: '--font-host',
  display: 'swap',
});

const hiragino = localFont({
  src: '../public/fonts/Hiragino-Kaku-Gothic-Std-W8.otf', // Path to your file
  variable: '--font-hira', 
  display: 'swap',
});

const pixelify = localFont({
  src: '../public/fonts/pixelify.ttf', 
  variable: '--font-pixelify', 
  display: 'swap',
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