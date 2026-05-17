import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JG University — Excellence By Choice | Future-Ready Education",
  description:
    "JG University is a new-age tech-driven university offering industry-aligned programmes. UGC approved, powered by ASIA Charitable Trust since 1965. Explore UG, PG, Doctoral & Certificate courses.",
  keywords: [
    "JG University",
    "Ahmedabad University",
    "BBA",
    "BCA",
    "MBA",
    "MCA",
    "B.Tech",
    "UGC Approved",
    "ASIA Charitable Trust",
  ],
  authors: [{ name: "JG University" }],
  openGraph: {
    title: "JG University — Excellence By Choice",
    description:
      "Future-ready education for ambitious learners. Explore programmes aligned with industry demand.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
