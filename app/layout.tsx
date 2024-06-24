import type { Metadata } from "next";
import { Inter, Dancing_Script, Cinzel, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const dance = Dancing_Script({ 
  subsets: ["latin"],
  display:'swap',
  variable:'--font-dance' 

});

const caveat = Caveat({ 
  subsets: ["latin"],
  display:'swap',
  variable:'--font-dance' 

});
const play = Playfair_Display({ 
  subsets: ["latin"],
  display:'swap',
  variable:'--font-play' 

});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
})

export const metadata: Metadata = {
  title: "Aabhimanyu Gupta",
  description: "some stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${play.variable} ${caveat.variable}`}>{children}</body>
    </html>
  );
}
