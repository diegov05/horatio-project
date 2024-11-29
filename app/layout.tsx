import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import Preloader from "@/components/preloader";

export const metadata: Metadata = {
  title: "What is stopping you? | London 2024 | Elevate CX",
  description: "Uncover insights from 'What is Stopping You?' &shy;aa an inspiring Elevate CX 2024 session featuring a short film and strategies to achieve your goals.",
};

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-satoshi"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body
        className={`antialiased`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
