import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asish Kumar Dalal | Portfolio",
  description: "Software Engineer and Solo Founder portfolio of Asish Kumar Dalal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}