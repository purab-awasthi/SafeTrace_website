import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SafeTrace — AI-Powered Cybersecurity CLI",
  description: "AI-powered phishing detection — directly from your terminal. Lightweight, explainable, zero setup.",
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
