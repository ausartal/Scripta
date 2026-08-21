import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Scripta — Transform Ideas Into Reality",
  description:
    "Scripta is a creative technology studio that helps students, educators, and creators transform their best ideas into websites, apps, games, illustrations, and learning experiences that matter.",
  keywords: ["creative technology", "web development", "education", "design", "AI solutions"],
  openGraph: {
    title: "Scripta — Transform Ideas Into Reality",
    description: "Creative technology that teaches, creates, and celebrates ideas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${instrumentSerif.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
