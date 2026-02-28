import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lisa Wilson Design | Kitchen Designer in Cape Coral, FL",
  description:
    "Custom kitchen design in Cape Coral, Florida. Specializing in Woodharbor cabinetry. Beautiful, functional kitchens tailored to your lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased font-[family-name:var(--font-geist-sans)]`}>
        {children}
      </body>
    </html>
  );
}
