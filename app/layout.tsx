import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-popins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nohemi = localFont({
  src: "./fonts/nohemi.woff2",
  variable: "--font-nohemi",
});

export const metadata: Metadata = {
  title: "Hack This Fall 2024",
  description:
    "Hack This Fall 2024 is a 36 hour in-person hackathon scheduled to happen in Gandhinagar, Gujarat from 9th Feb to 11th Feb 2024! 🧡",
  openGraph: {
    title: "Hack This Fall 2024",
    description:
      "Hack This Fall 2024 is a 36 hour in-person hackathon scheduled to happen in Gandhinagar, Gujarat from 9th Feb to 11th Feb 2024! 🧡",
    siteName: "Hack This Fall 2024",
    images: [
      {
        url: "https://hackthisfall.tech/og.png",
        width: 2000,
        height: 1000,
        alt: "Hack This Fall 2024",
      },
    ],
  },
  twitter: {
    title: "Hack This Fall 2024",
    description:
      "Hack This Fall 2024 is a 36 hour in-person hackathon scheduled to happen in Gandhinagar, Gujarat from 9th Feb to 11th Feb 2024! 🧡",
    images: [
      {
        url: "https://hackthisfall.tech/og.png",
        width: 2000,
        height: 1000,
        alt: "Hack This Fall 2024",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nohemi.variable} ${poppins.variable}`}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
